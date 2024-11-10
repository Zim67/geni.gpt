const migrateId: Function = (Sequelize: any): object => {
  return {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    }
  }
}
export default migrateId