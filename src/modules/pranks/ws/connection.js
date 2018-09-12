const connection = (io) => {
  io.on('connection', (socket) => {
    console.log('::Pranks:: - A user connected');
  });
};

module.exports = connection;
