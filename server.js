var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


server.listen(3000);

app.get("/",function  (req,res) {
  // body...
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
			io.sockets.emit('new message', data);
	});
});

/*https://www.youtube.com/watch?v=Spjt66m3RtA*/




/*var io = require('socket.io').listen(3000);

io.sockets.on('connection',arranque);

function arranque (socket){
  socket.on('datos_cliente',regresar_datos);
}

function regresar_datos (data){
  io.sockets.emit('datos_servidor',data);
}*/






