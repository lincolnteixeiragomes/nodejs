const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Seja muito bem vindo!");
});
app.get("/sobre",function(req, res){
  res.send("Minha pagina sobre!");
});
app.get("/cadastro", function(req, res){
  res.send("Essa é minha pagina de cadastro!")
});

app.listen(8081, function() {
  console.log("Servidor rodando no endereço http://192.168.0.16:8081");
});
