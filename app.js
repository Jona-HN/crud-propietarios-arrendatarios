// Configuración express
const express = require('express');
const app = express();
const puerto = 2800;

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(2800, () => {
    console.log(`Escuchando el puerto ${puerto}`);
})