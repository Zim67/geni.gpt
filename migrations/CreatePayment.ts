import {
  DataTypes,
  QueryInterface
} from 'sequelize'
import createId from '@/utils/createId'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable(
  'payments', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subscription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('payments')