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
    }
  }, {
    tableName: 'payments',
    timestamps: true
  }
)
paymentSqlModel.belongsTo(
  sequelize.models.User, {
    foreignKey: 'user'
  }
)
paymentSqlModel.belongsTo(
  sequelize.models.Subscription, {
    foreignKey: 'subscription'
  }
)
export default paymentSqlModel