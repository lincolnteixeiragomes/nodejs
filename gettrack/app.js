const express = require("express");
const app = express();
const Posicao = require("./database/Posicao");

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
	var ignition = io.substring(0,1);
	var input = io.substring(1,4);
	var output = io.substring(4,6);
  var date_time = date.concat(" " + time);

    // Posicao.create({
    //
    //   id_rastreador: dev_id,
    //   data_hora:
    // })
    res.send(
		"Param 1 - hdr: " + hdr + "<br>" +
		"Param 2 - dev_id: " + dev_id + "<br>" +
		"Param 3 - sw_ver: " + sw_ver + "<br>" +
		"Param 4 - date: " + date + "<br>" +
		"Param 5 - time: " + time + "<br>" +
		"Param 6 - cell: " + cell + "<br>" +
		"Param 7 - lat: " + lat + "<br>" +
		"Param 8 - lon: " + lon + "<br>" +
		"Param 9 - spd: " + spd + "<br>" +
		"Param10 - crs: " + crs + "<br>" +
		"Param11 - satt: " + satt + "<br>" +
		"Param12 - fix: " + fix + "<br>" +
		"Param13 - dist: " + dist  + "<br>" +
		"Param14 - pwr_volt: " + pwr_volt + "<br>" +
		"Param15 - io: " + io  + "<br>" +
		"Param16 - mode: " + mode + "<br>" +
		"Param17 - msg_num: " + msg_num  + "<br>" +
		"Param18 - h_meter: " + h_meter  + "<br>" +
		"Param19 - bck_volt: " + bck_volt  + "<br>" +
		"Param20 - : msg_type: " + msg_type  + "<br>" +
		"Param21 - : ignition: " + ignition  + "<br>" +
		"Param22 - : input: " + input + "<br>" +
		"Param23 - : output: " + output  + "<br>" +
    "Param23 - : Data e Hora: " + date_time  + "<br>"
    );

  }else{
    res.send("Esses params não fazem parte da posição!");
  }

});

app.listen(6969, function() {
  console.log("Servidor rodando no endereço http://192.168.0.16:6969");
});
