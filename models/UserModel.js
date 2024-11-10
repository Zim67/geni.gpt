import {
  DataTypes,
  Model
} from 'sequelize'
import createId from '@/utils/createId'
import sequelize from '@/config/sequelize'
class UserModel extends Model {}
UserModel.init({
  ...createId(),
  email: {
    type: DataTypes.STRING,
    unique: [
      true,
      'A user with this email address already exists.'
    ],
    allowNull: false,
    validate: {
      isEmail: true
    }
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
  }
}, {
  sequelize,
  modelName: 'user',
  tableName: 'users',
  timestamps: true,
  hooks: {
    async beforeCreate(user) {
      if (user.role === 'root') {
        if (await UserModel.findOne({
          where: {
            role: 'root'
          }
        })) {
          throw new Error(
            'There can be only one root user.'
          )
        }
      }
    }
  }
})
export default UserModel