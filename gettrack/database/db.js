const Sequelize = require("sequelize")
const sequelize = new Sequelize('gettrack','app','app',{
  host: "192.168.0.12",
  dialect: 'postgres'
})


module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
