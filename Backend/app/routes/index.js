const technologyController = require('../controllers/technologyController');

module.exports = (router) => {
  router.route('/technologies').get(technologyController.obtenerTecnologias);
  router.route('/technologies/search').get(technologyController.buscarTecnologia);
  router.route('/technologies/:id').get(technologyController.obtenerTecnologia);
}