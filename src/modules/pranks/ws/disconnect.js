const disconnect = (io, socket) => {
  socket.on('disconnect', () => {
    console.log('::PRANKS - DISCONNECT::');
  });
};

module.exports = disconnect;
