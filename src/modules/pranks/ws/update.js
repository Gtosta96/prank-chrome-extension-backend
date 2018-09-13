const PranksDAO = require('../api/dao');

const update = (io, socket) => {
  socket.on('update', (id, prank) => {
    console.log('::PRANKS - UPDATE::', id, prank);

    PranksDAO.update({ id, prank })
      .then((response) => io.emit('update', response))
      .catch((error) => console.log(error));
  });
};

module.exports = update;
