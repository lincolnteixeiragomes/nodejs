const Posicao = require("./database/Posicao");
var net = require('net');

//configuração
var HOST = '192.168.0.16';
var PORT = 6969;

net.createServer(function(sock) {

  console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

  sock.on('data', function(data) {
    sock.write(data);

    var arrayData=data.toString('utf8').split(";");

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
        var date_time = date.concat(date.substring(0,4) + "-" + date.substring(4,6) + "-" + date.substring(6,8) + " " + time).substring(8,27);

        Posicao.create({

          id_rastreador: dev_id,
          data_hora: date_time,
          latitude: lat,
          longitude: lon,
          velocidade: spd,
          numero_satelites: satt,
          ignicao: ignition,
          entradas: input,
          tensao: pwr_volt

        })
    }

});

  sock.on('close', function(data) {
      console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
  });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
