// socket.io
// node.js(express)

var app = require('express')(); 
var http = require('http').Server(app); 
var io = require('socket.io')(http); 

app.get('/', function(req, res){ 
    res.send("hi"); 
}); 

io.on('connection', function(socket){ 
    socket.on('send_message', function(msg){ 
        io.emit('receive_message', msg); }
    ); 
});


http.listen(3000, function(){ console.log('listening on *:3000'); });
