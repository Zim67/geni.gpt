import {
  DataTypes,
  QueryInterface
} from 'sequelize'
import createId from '@/utils/createId'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable(
  'analyses', {
    ...createId(), 
    user: {
      type: DataTypes.STRING,
      allowNull: false
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('analyses')