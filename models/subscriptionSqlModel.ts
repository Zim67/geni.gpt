import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import SubscriptionSqlRecord from '@/interfaces/SubscriptionSqlRecord'
import createId from '@/utils/createId'
const subscriptionSqlModel: ModelStatic<Model<SubscriptionSqlRecord>> = sequelize.models.Subscription ?? sequelize.define<Model<SubscriptionSqlRecord>>(
  'Subscription', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
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
      type: [DataTypes.STRING],
      references: {
        model: 'Payment',
        key: 'id'
      }
    }
  }, {
    tableName: 'subscriptions',
    timestamps: true
  }
)
subscriptionSqlModel.belongsTo(
  sequelize.models.User, {
    foreignKey: 'user'
  }
)
subscriptionSqlModel.hasMany(
  sequelize.models.Payment, {
    foreignKey: 'payments'
  }
)
export default subscriptionSqlModel