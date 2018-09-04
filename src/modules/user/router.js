const router = require('express').Router();

const userController = require('./controller');

router.get('/user', userController.get);
router.get('/user/:id', userController.getById);

router.post('/user', userController.post);

router.put('/user/:id', userController.put);

router.delete('/user/:id', userController.remove);

module.exports = router;
