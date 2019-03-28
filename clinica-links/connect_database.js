const Sequelize = require("sequelize")
const sequelize = new Sequelize('gettrack','root','password',{
  host: "192.168.1.65",
  dialect: 'mysql'
})

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!")
}).catch(function(erro){
  console.log("Erro na conexão com o banco" + erro)
})
