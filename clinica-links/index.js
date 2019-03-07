const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Seja muito bem vindo!, agora não é mais preciso parar e iniciar o node pois está rodando com nodemon!");
});

app.get("/sobre",function(req, res){
  res.send("Minha pagina sobre!");
});

app.get("/cadastro/:nome/:cpf", function(req, res){
  res.send("Seu nome é: " + req.params.nome + "<br>" + "Seu CPF é: " + req.params.cpf);
});

app.listen(8081, function() {
  console.log("Servidor rodando no endereço http://192.168.0.16:8081");
});
