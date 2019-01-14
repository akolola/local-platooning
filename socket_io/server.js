var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;
var allClients = {}
var Computation = require('../MathProcessing/Computation');
var tempMemory = {}
server.listen(port, function() {
    console.log("listening");
});
app.get('/', function(req, res) {
    res.send("It's work");
});
io.on('connection', function(socket) {
    var clientId = socket.handshake.query.clientId;
    allClients[clientId] = socket;
    console.log(`client ${clientId} connected`);
    socket.on('car_event', function(data) {
        if (!(data['car_id'] in tempMemory)) {
            tempMemory[data['car_id']] = [];
        }
        tempMemory[data['car_id']].push(data);
        //---------------------------------------------------------------
        if (data['status'] == 'obstacle') {
            var size = tempMemory[data['car_id']].length
            var lastEvent = tempMemory[data['car_id']][size - 1];
            lastEvent['distances'].forEach(function(item) {
                var car_id = item['car_id']
                var distance = item['distance']
                var car_id_speed = tempMemory[car_id][tempMemory[car_id].length - 1]['speed'];
                //--- Put parameters into the function
                var result = Computation.calculate(lastEvent['speed'], car_id_speed, distance, 300);
                console.log(result);
                //--- Emit results
                allClients[`car_${car_id}`].emit('slow_down', result);
            });
        }
    });
});
