const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const PORT = process.env.PORT || 5000

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log("message envoye: " + msg);
        io.emit('chat message', msg);
    });
});

http.listen(PORT, () => console.log(`Listening on ${ PORT }`));