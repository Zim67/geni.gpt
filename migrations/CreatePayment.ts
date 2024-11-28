import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utils/createId'
import PaymentSqlRecord from '@/interfaces/PaymentSqlRecord'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<PaymentSqlRecord>>(
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