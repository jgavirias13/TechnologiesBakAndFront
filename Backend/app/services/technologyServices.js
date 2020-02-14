const Technology = require('../models/technologyModel');

exports.obtenerTecnologias = async () => {
  let technologies = await Technology.find();
  return technologies;
}