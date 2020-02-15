const technologyService = require('../services/technologyServices');

exports.obtenerTecnologias = async (req, res) => {
  let status;
  let response;

  try {
    response = await technologyService.obtenerTecnologias();
    status = 200;
  } catch (err) {
    response = {
      message: 'Ha ocurrido un error al tratar de obtener las tecnologias',
      error: err
    };
    status = 500;
  }

  res.status(status).send(response);
};

exports.obtenerTecnologia = async (req, res) => {
  const id = req.params.id;
  let status;
  let response;
  if (id) {
    try {
      const tecnologia = await technologyService.obtenerTecnologia(id);
      if (tecnologia) {
        status = 200;
        response = tecnologia;
      } else {
        status = 404;
        response = {
          message: 'No se ha encontrado la tecnologia buscado',
          error:
            'Error al tratar de buscar el id enviado. No se ha encontrado en base de datos'
        };
      }
    } catch (err) {
      status = 500;
      response = {
        message: "Error al ejecutar la consulta",
        error: err
      }
    }
  } else {
    status = 500;
    response = {
      message: 'Error en el id enviado',
      error: 'No se ha encontrado el id entre los parametros pasados'
    };
  }

  res.status(status).send(response);
};

exports.buscarTecnologia = async (req, res) => {
  let status;
  let response;
  const nombre = req.query.nombre;
  if(nombre){
    try{
      response = await technologyService.buscarTecnologiaPorNombre(nombre);
      status = 200;
    }catch(err){
      response = {
        message: "Ha ocurrido un error al buscar la tecnologia",
        error: err
      }
      status = 500;
    }
  }else{
    response = {
      message: "No se ha podido obtener el nombre",
      error: "Por favor ingresar el nombre a buscar"
    }
  }
  res.status(status).send(response);
}