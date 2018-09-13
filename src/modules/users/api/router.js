const router = require('express').Router();

const usersController = require('./controller');

router.get('/users', usersController.get);
router.get('/users/:id', usersController.getById);

router.post('/users', usersController.post);

router.put('/users/:id', usersController.put);

router.delete('/users/:id', usersController.remove);

module.exports = router;
