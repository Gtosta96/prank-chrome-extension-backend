const router = require('express').Router();

const usersController = require('./controller');

router.get('/users', usersController.get);
router.get('/user/:id', usersController.getById);

router.post('/user', usersController.post);

router.put('/user/:id', usersController.put);

router.delete('/user/:id', usersController.remove);

module.exports = router;
