import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utils/createId'
import SubscriptionSqlRecord from '@/interfaces/SubscriptionSqlRecord'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<SubscriptionSqlRecord>>(
  'subscriptions', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tier: {
      type: DataTypes.ENUM(
        'basic',
        'prem'
      ),
      allowNull: false,
      defaultValue: 'basic'
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now().toLocaleString()
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false
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
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('subscriptions')