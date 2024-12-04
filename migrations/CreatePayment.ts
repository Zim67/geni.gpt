import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utils/createId'
import PaymentSqlRecord from '@/interfaces/PaymentSqlRecord'
import createTimeStamps from '@/utils/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<PaymentSqlRecord>>(
  'payments', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    subscription: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Subscription',
        key: 'id'
      }
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
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('payments')