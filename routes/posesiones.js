const express = require('express');
const router = express.Router();
const posesionesController = require('../controller/posesionesController.js');

// Métodos para posesiones (relación propietario-propiedad)
router.get('/', posesionesController.getAll);
router.get('/id/:id', posesionesController.getById);
router.get('/propiedad/:id', posesionesController.getPropietariosByIdPropiedad);
router.get('/propietario/:id', posesionesController.getPropiedadesByIdPropietario);
router.post('/add', posesionesController.add);
router.patch('/update', posesionesController.update);
router.delete('/delete/:id', posesionesController.deleteById);

module.exports = router;