var usonic = require('mmm-usonic');

module.exports = function (io) {

    setInterval(measureDistance, 100);
    io.sockets.on('connection', function (socket) {
        socket.on('message', function(data) {
                console.log(data);
                socket.emit('Hello');
        });
    });
};


function measureDistance() {
    var sensorLeft = usonic.createSensor(24, 23, 450);
    var sensorRight = usonic.createSensor(22, 27, 450);
    var distanceLeft = sensorLeft();
    console.log("Left distance is " + distanceLeft);
    var distanceRight = sensorRight();
    console.log("Right distance is " + distanceRight);
}
