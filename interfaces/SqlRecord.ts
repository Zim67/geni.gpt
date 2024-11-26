import {Model} from 'sequelize'
interface SqlRecord extends Model {
  id: string
  createdAt: string
  updatedAt: string
}
export default SqlRecord