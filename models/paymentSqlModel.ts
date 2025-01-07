import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import PaymentSqlRecord from '@/interfaces/PaymentSqlRecord'
import createId from '@/utils/createId'
const paymentSqlModel: ModelStatic<Model<PaymentSqlRecord>> = sequelize.models.Payment ?? sequelize.define<Model<PaymentSqlRecord>>(
  'Payment', {
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
    }
  }, {
    tableName: 'payments',
    timestamps: true
  }
)
export default paymentSqlModel