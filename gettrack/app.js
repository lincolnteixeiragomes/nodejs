const express = require("express");
const app = express();

app.get("/:data", function(req, res){

  var arrayData = req.params.data.split(";");

  if ( arrayData[0] == "SA200STT" ){

    var hdr = arrayData[0];
    var dev_id = arrayData[1];
    var sw_ver = arrayData[2];
    var date = arrayData[3];
    var time = arrayData[4];
    var cell = arrayData[5];
    var lat = arrayData[6];
    var lon = arrayData[7];
    var spd = arrayData[8];
    var crs = arrayData[9];
    var satt = arrayData[10];
    var fix = arrayData[11];
    var dist = arrayData[12];
    var pwr_volt = arrayData[13];
    var io = arrayData[14];
    var mode = arrayData[15];
    var msg_num = arrayData[16];
    var h_meter = arrayData[17];
    var bck_volt = arrayData[18];
    var msg_type = arrayData[19];

    res.send("Param 1: " + hdr +  "<br>" + " Param 2: " + dev_id);

  }else{
    res.send("Esses params não fazem parte da posição!");
  }

});

app.listen(6969, function() {
  console.log("Servidor rodando no endereço http://192.168.0.12:6969");
});
