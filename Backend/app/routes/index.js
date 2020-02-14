const technologyController = require('../controllers/technologyController');

module.exports = (router) => {
  router.route('/technologies').get(technologyController.obtenerTecnologias);
}