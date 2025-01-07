import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AnalysisSqlRecord from '@/interfaces/AnalysisSqlRecord'
import createId from '@/utils/createId'
const analysisSqlModel: ModelStatic<Model<AnalysisSqlRecord>> = sequelize.models.Analysis ?? sequelize.define<Model<AnalysisSqlRecord>>(
  'Analysis', {
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
    }
  }, {
    tableName: 'analyses',
    timestamps: true
  }
)
export default analysisSqlModel