const express = require("express");
const app = express();

app.get("/:data", function(req, res){

  var arrayData = data.split(;);

  res.send(" Param 1: " + arrayData[0] +  "<br>" + " Param 2: " + arrayData[1]);
});

app.listen(6969, function() {
  console.log("Servidor rodando no endereço http://192.168.0.16:6969");
});
