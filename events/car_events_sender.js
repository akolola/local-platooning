var io = require('socket.io-client');
var socket = io('http://localhost:3000');
var normal_data = require('./normal_car_events.json');
var anomaly_data = require('./anomaly_car_events.json');

socket.on('slow_down', function(data) {
    console.log(data);
});

normal_data.forEach(function(car_event) {
    socket.emit('car_event', car_event);
});

anomaly_data.forEach(function(car_event) {
    socket.emit('car_event', car_event);
});