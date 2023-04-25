const express = require('express');
const router = express.Router();
const propiedadesController = require('../controller/propiedadesController.js');

router.get('/', propiedadesController.getAll);
router.get('/id/:id', propiedadesController.getById);
router.get('/arrendatario/:id', propiedadesController.getPropiedadesByIdArrendatario);
router.post('/add', propiedadesController.add);
router.patch('/update', propiedadesController.update);
router.patch('/:id/arrendar/:id_arrendatario', propiedadesController.updateArrendatarioPropiedad);
router.patch('/:id/liberar', propiedadesController.updateLiberarPropiedad);
router.delete('/delete/:id', propiedadesController.deleteById);
router.delete('/deleteAll', propiedadesController.deleteAll);

module.exports = router;
