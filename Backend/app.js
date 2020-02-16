const express = require('express');
const app = express();
const config = require('./app/config');
const colors = require('colors');
const db = require('./app/config/db');
const cors = require('cors');
const router = express.Router();
const routes = require('./app/routes');

colors.setTheme({
  info: 'green',
  help: 'magenta',
  warn: 'yellow',
  success: 'cyan',
  error: 'red'
});

db();

routes(router);
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/app/public'));
app.use('/api', router);


app.listen(config.PORT, () => {
  console.log('========================================================='.info);
  console.log(`**** Servidor inicializado en puerto ${config.PORT}`.success);
  console.log('========================================================='.info);
});
