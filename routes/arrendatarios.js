const express = require('express');
const router = express.Router();
const arrendatariosController = require('../controller/arrendatariosController.js');

router.get('/', arrendatariosController.getAll);
router.get('/id/:id', arrendatariosController.getById);
router.post('/add', arrendatariosController.add);
router.patch('/update', arrendatariosController.update);
router.delete('/delete/:id', arrendatariosController.deleteById);

module.exports = router;