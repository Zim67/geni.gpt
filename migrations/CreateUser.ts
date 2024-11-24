import {
  DataTypes,
  QueryInterface,
  Sequelize
} from 'sequelize'
import createId from '@/utils/createId'
export const up = async (
  queryInterface: QueryInterface,
  sequelize: Sequelize
) => {
  await queryInterface.createTable('users', {
    ...createId(),
    email: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM(
        'admin',
        'root',
        'user'
      ),
      allowNull: false,
      defaultValue: 'user'
    },
    tier: {
      type: DataTypes.ENUM(
        'basic',
        'free',
        'prem'
      ),
      allowNull: false,
      defaultValue: 'free'
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  })
  await queryInterface.addConstraint(
    'users', {
      type: 'check',
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
  queryInterface: QueryInterface,
  sequelize: Sequelize
) => await queryInterface.dropTable('users')