import {
  DataTypes,
  ModelStatic
} from 'sequelize'
import createId from '@/utils/createId'
import sequelize from '@/config/sequelize'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
const userSqlModel: ModelStatic<UserSqlRecord> = sequelize.define<UserSqlRecord>(
  'user', {
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
    }
  }, {
    timestamps: true,
    hooks: {
      async beforeCreate(user: UserSqlRecord) {
        if (user.get('role') === 'root') {
          if (await userSqlModel.findOne({
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
  }
)
export default userSqlModel