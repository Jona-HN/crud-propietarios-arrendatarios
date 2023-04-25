// Configuración express
const express = require('express');
const app = express();
process.env.port = 2800;

// Configuración HTTPs
const fs = require('fs');
const https = require('https');
const credenciales =
{
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt'),
    passphrase: '1234'
};
const httpsServer = https.createServer(credenciales, app);

// Configuración Routers
// Router arrendatarios
const arrendatariosRouter = require('./routes/arrendatarios');
app.use('/arrendatarios', arrendatariosRouter);
// Router propiedades
const propiedadesRouter = require('./routes/propiedades');
app.use('/propiedades', propiedadesRouter);

const propietariosController = require('./controller/propietariosController.js');
const posesionesController = require('./controller/posesionesController.js');

app.get('/', (req, res) => {
    res.send('Hello world!');
})

httpsServer.listen(process.env.port, () => {
    console.log(`Escuchando el puerto ${process.env.port}`);
}).on('error', err => {
    console.log('Error al iniciar el servidor: ', err);
});

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
app.post('/posesiones/add', posesionesController.add);
app.patch('/posesiones/update', posesionesController.update);
app.delete('/posesiones/delete/:id', posesionesController.deleteById);