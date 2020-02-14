const mongoose = require('mongoose');
const config = require('./index');

module.exports = () => {
  mongoose
    .connect(config.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('**** Conexión a base de datos exitosa'.success);
    })
    .catch(err => {
      console.log(
        '****************************************************************'.error
      );
      console.log(
        'Ha ocurrido un error al tratar de conectar con la base de datos'.error
      );
      console.log(
        '****************************************************************'.error
      );
      console.log(err);
    });

  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'DB connection error:'.error));
};
