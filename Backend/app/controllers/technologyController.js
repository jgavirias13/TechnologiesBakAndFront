const technologyService = require('../services/technologyServices');

exports.obtenerTecnologias = async (req, res) => {
  let status;
  let response;

  try{
    response = await technologyService.obtenerTecnologias();
    status = 200;
  }catch(err){
    response = {
      message: "Ha ocurrido un error al tratar de obtener las tecnologias",
      error: err
    };
    status = 500;
  }

  res.status(status).send(response);
}