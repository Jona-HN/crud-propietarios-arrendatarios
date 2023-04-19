// Configuración express
const express = require('express');
const app = express();
const puerto = 2800;

// Controladores
const arrendatariosController = require('./controller/arrendatariosController.js');

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(2800, () => {
    console.log(`Escuchando el puerto ${puerto}`);
})

// Métodos para arrendatarios
app.get('/arrendatarios', arrendatariosController.getAll);
app.get('/arrendatarios/id/:id', arrendatariosController.getById);
app.post('/arrendatarios/add', arrendatariosController.add);
app.patch('/arrendatarios/update', arrendatariosController.update);
app.delete('/arrendatarios/delete/:id', arrendatariosController.deleteById);