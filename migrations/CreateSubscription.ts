import {
  DataTypes,
  QueryInterface
} from 'sequelize'
import createId from '@/utils/createId'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable(
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
      allowNull: false
    }
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('subscriptions')