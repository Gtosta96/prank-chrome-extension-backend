const router = require('express').Router();

const pranksController = require('./controller');

router.get('/pranks', pranksController.get);
router.get('/pranks/:id', pranksController.getById);

router.post('/pranks/create', pranksController.post);

router.put('/pranks/:id', pranksController.put);

router.delete('/pranks/:id', pranksController.remove);

module.exports = router;
