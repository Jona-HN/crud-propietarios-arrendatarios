const express = require('express');
const router = express.Router();
const propietariosController = require('../controller/propietariosController.js');

router.get('/', propietariosController.getAll);
router.get('/id/:id', propietariosController.getById);
router.post('/add', propietariosController.add);
router.patch('/update', propietariosController.update);
router.delete('/delete/:id', propietariosController.deleteById);

module.exports = router;