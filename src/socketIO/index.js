const socketIO = require('socket.io');

const io = socketIO();

// socket.io events
io.on('connection', (socket) => {
  console.log('A user connected');
});

module.exports = io;
