const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Seja muito bem vindo");
});


app.listen(8081, function() {
  console.log("Servidor rodando no endereço http://192.168.0.16:8081");
});
