import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utils/createId'
import createTimeStamps from '@/utils/createTimeStamps'
import MailingListEntrySqlRecord from '@/interfaces/MailingListEntrySqlRecord'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<MailingListEntrySqlRecord>>(
  'mailing_list', {
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
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('mailing_list')