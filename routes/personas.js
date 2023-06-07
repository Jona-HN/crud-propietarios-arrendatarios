const express = require('express');
const router = express.Router();
const personasController = require('../controller/personasController.js');

router.get('/', personasController.getAll);
router.get('/id/:id', personasController.getById);
router.post('/add', personasController.add);
router.patch('/update', personasController.update);
router.delete('/delete/:id', personasController.deleteById);

module.exports = router;
