import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utils/createId'
import AnalysisSqlRecord from '@/interfaces/AnalysisSqlRecord'
import createTimeStamps from '@/utils/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AnalysisSqlRecord>>(
  'analyses', {
    ...createId(), 
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    input: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    score: {
      type: DataTypes.DECIMAL(1, 1),
      allowNull: false
    },
    suggestions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('analyses')