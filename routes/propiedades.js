const express = require('express');
const router = express.Router();
const propiedadesController = require('../controller/propiedadesController.js');

router.get('/', propiedadesController.getAll);
router.get('/id/:id', propiedadesController.getById);
router.post('/add', propiedadesController.add);
router.patch('/update', propiedadesController.update);
router.delete('/delete/:id', propiedadesController.deleteById);

module.exports = router;
