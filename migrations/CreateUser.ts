import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utils/createId'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
export const up = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<UserSqlRecord>>(
  'users', {
    ...createId(),
    email: {
      type: DataTypes.STRING,
      unique: [
        true,
        'A user with this email address already exists.'
      ],
      allowNull: false
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
    analyses: {
      type: [DataTypes.STRING]
    },
    subscriptions: {
      type: [DataTypes.STRING]
    },
    payments: {
      type: [DataTypes.STRING]
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }
)
export const down = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('users')