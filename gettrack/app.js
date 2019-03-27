const express = require("express");
const app = express();

app.get("/:data", function(req, res){
  res.send("Data enviada: " + req.params.data );
});

app.listen(6969, function() {
  console.log("Servidor rodando no endereço http://192.168.0.16:6969");
});
