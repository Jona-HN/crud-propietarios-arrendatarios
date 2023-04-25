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
// Router propietarios
const propietariosRouter = require('./routes/propietarios');
app.use('/propietarios', propietariosRouter);
// Router posesiones
const posesionesRouter = require('./routes/posesiones');
app.use('/posesiones', posesionesRouter);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

httpsServer.listen(process.env.port, () => {
    console.log(`Escuchando el puerto ${process.env.port}`);
}).on('error', err => {
    console.log('Error al iniciar el servidor: ', err);
});