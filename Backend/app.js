const express = require('express');
const app = express();
const config = require('./app/config');
const colors = require('colors');
const db = require('./app/config/db');
const cors = require('cors');

colors.setTheme({
  info: 'green',
  help: 'magenta',
  warn: 'yellow',
  success: 'cyan',
  error: 'red'
});

db();

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cors());

app.listen(config.PORT, () => {
  console.log('========================================================='.info);
  console.log(`**** Servidor inicializado en puerto ${config.PORT}`.success);
  console.log('========================================================='.info);
});
