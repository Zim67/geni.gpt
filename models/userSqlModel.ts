import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import createId from '@/utils/createId'
import sequelize from '@/config/sequelize'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
const userSqlModel: ModelStatic<Model<UserSqlRecord>> = sequelize.models.User ?? sequelize.define<Model<UserSqlRecord>>(
  'User', {
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
      type: DataTypes.STRING,
      allowNull: true
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
    }
  }, {
    tableName: 'users',
    timestamps: true,
    hooks: {
      beforeCreate: async (user: Model<UserSqlRecord>): Promise<void> => {
        if (user.get('role') === 'root') if (await userSqlModel.findOne({
          where: {
            role: 'root'
          }
        })) throw new Error('The root user already exists.')
      },
      beforeDestroy: async (user: Model<UserSqlRecord>): Promise<void> => {
        if (user.get('role') === 'root') throw new Error('The root user shouldn\'t be deleted.')
      }
    }
  }
)
userSqlModel.hasMany(
  sequelize.models.Analysis, {
    foreignKey: 'analyses'
  }
)
userSqlModel.hasMany(
  sequelize.models.Subscription, {
    foreignKey: 'subscriptions'
  }
)
userSqlModel.hasMany(
  sequelize.models.Payment, {
    foreignKey: 'payments'
  }
)
export default userSqlModel