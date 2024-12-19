import sequelize from '@/config/sequelize.js'
const connectSequelize: Function = async (): Promise<void> => {
  let connected: boolean = false
  if (!connected) try {
    await sequelize.authenticate()
    connected = true
    console.log('Sequelize successfully connected.')
    await sequelize.sync()
    console.log('Schema successfully synchronized.')
  } catch (error: any) {
    console.error(error.toString())
  }
}
export default connectSequelize