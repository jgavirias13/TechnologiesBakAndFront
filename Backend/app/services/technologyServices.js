const Technology = require('../models/technologyModel');

exports.obtenerTecnologias = async () => {
  let technologies = await Technology.find();
  return technologies;
};

exports.obtenerTecnologia = async id => {
  let tecnologia = await Technology.findById(id);
  return tecnologia;
};

exports.buscarTecnologiaPorNombre = async nombre => {
  let nombreTransformado = nombre.toLowerCase();
  let technologies = Technology.find({
    name: { $regex: new RegExp(`.*${nombreTransformado}.*`, 'i') }
  });

  return technologies;
};
