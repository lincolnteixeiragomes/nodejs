const Sequelize = require("sequelize")
const sequelize = new Sequelize('gettrack','app','app',{
  host: "192.168.0.12",
  dialect: 'postgres'
})

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!")
}).catch(function(erro){
  console.log("Erro na conexão com o banco" + erro)
})
