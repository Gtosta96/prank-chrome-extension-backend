const PranksDAO = require('../api/dao');

const update = (io, socket) => {
  socket.on('update', (prank) => {
    console.log('::PRANKS - UPDATE::', prank);

    PranksDAO.update({ id: prank.id, prank })
      .then((response) => io.emit('update', response))
      .catch((error) => console.log(error));
  });
};

module.exports = update;
