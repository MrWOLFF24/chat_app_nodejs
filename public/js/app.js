/*let  socket = io();

const form = document.querySelector('form');
let m = document.getElementById('m').value;
const messages = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    socket.emit('chat message', m);
    m = "";
    return false;
});

socket.on('chat message', function (msg) {
    const li = createElement("li");
    li.textContent = msg;
    messages.appendChild(li);
});*/


$(function () {
    var socket = io();
    $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
    });
});