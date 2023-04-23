// Configuración express
const express = require('express');
const app = express();
const puerto = 2800;

// Controladores
const arrendatariosController = require('./controller/arrendatariosController.js');
const propiedadesController = require('./controller/propiedadesController.js');
const propietariosController = require('./controller/propietariosController.js');
const posesionesController = require('./controller/posesionesController.js');

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
app.delete('/arrendatarios/deleteAll', arrendatariosController.deleteAll);

// Métodos para propiedades
app.get('/propiedades', propiedadesController.getAll);
app.get('/propiedades/id/:id', propiedadesController.getById);
app.get('/propiedades/arrendatario/:id', propiedadesController.getPropiedadesByIdArrendatario);
app.post('/propiedades/add', propiedadesController.add);
app.patch('/propiedades/update', propiedadesController.update);
app.patch('/propiedades/:id/arrendar/:id_arrendatario', propiedadesController.updateArrendatarioPropiedad);
app.patch('/propiedades/:id/liberar', propiedadesController.updateLiberarPropiedad);
app.delete('/propiedades/delete/:id', propiedadesController.deleteById);
app.delete('/propiedades/deleteAll', propiedadesController.deleteAll);

// Métodos para propietarios
app.get('/propietarios', propietariosController.getAll);
app.get('/propietarios/id/:id', propietariosController.getById);
app.post('/propietarios/add', propietariosController.add);
app.patch('/propietarios/update', propietariosController.update);
app.delete('/propietarios/delete/:id', propietariosController.deleteById);
app.delete('/propietarios/deleteAll', propietariosController.deleteAll);

// Métodos para posesiones (relación propietario-propiedad)
app.get('/posesiones', posesionesController.getAll);
app.get('/posesiones/id/:id', posesionesController.getById);
app.get('/posesiones/propiedad/:id', posesionesController.getPropietariosByIdPropiedad);
app.get('/posesiones/propietario/:id', posesionesController.getPropiedadesByIdPropietario);