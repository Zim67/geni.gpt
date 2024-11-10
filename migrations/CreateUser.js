import migrateId from '@/utils/migrateId'
export const up = async (
  queryInterface,
  sequelize
) => {
  await queryInterface.createTable('users', {
    ...migrateId(sequelize),
    email: {
      type: sequelize.STRING,
      unique: [
        true,
        'A user with this email address already exists.'
      ],
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: sequelize.STRING,
      allowNull: false
    },
    image: {
      type: sequelize.STRING
    },
    role: {
      type: sequelize.ENUM(
        'admin',
        'root',
        'user'
      ),
      allowNull: false,
      defaultValue: 'user'
    },
    tier: {
      type: sequelize.ENUM(
        'basic',
        'free',
        'prem'
      ),
      allowNull: false,
      defaultValue: 'free'
    },
    createdAt: {
      type: sequelize.DATE
    },
    updatedAt: {
      type: sequelize.DATE
    }
  })
  await queryInterface.addConstraint(
    'users', {
      type: 'unique',
      fields: [
        'role'
      ],
      where : {
        role: 'root'
      },
      name: 'unique_root_constraint'
    }
  )
  await queryInterface.addConstraint(
    'users', {
      type: 'check',
      fields: [
        'role'
      ],
      where: {
        role: [
          'admin',
          'root',
          'user'
        ]
      },
      name: 'valid_role_constraint'
    }
  )
  await queryInterface.addConstraint(
    'users', {
      type: 'check',
      fields: [
        'tier'
      ],
      where: {
        tier: [
          'basic',
          'free',
          'prem'
        ]
      },
      name: 'valid_tier_constraint'
    }
  )
}
export const down = async (
  queryInterface,
  sequelize
) => await queryInterface.dropTable('users')