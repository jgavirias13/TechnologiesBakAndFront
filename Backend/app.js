const express = require('express');
const app = express();
const config = require('./app/config');

app.listen(config.PORT, () => {
    console.log('=========================================================');
    console.log(`**** Servidor inicializado en puerto ${config.PORT}`);
    console.log('=========================================================');
});