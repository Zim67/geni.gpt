import {Sequelize} from 'sequelize'
interface Db {
  Sequelize: typeof Sequelize
  sequelize: Sequelize
  [modelName: string]: any
}
export default Db