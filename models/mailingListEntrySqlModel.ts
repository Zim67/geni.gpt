import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import MailingListEntrySqlRecord from '@/interfaces/MailingListEntrySqlRecord'
import createId from '@/utils/createId'
const mailingListEntrySqlModel: ModelStatic<Model<MailingListEntrySqlRecord>> = sequelize.models.MailingListEntry ?? sequelize.define<Model<MailingListEntrySqlRecord>>(
  'MailingListEntry', {
    ...createId(),
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: [
        true,
        'You are already subscribed.'
      ],
      validate: {
        isEmail: true
      }
    }
  }, {
    tableName: 'mailing_list',
    timestamps: true
  }
)
export default mailingListEntrySqlModel