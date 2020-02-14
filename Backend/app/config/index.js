const dotenv = require('dotenv');
const dotenvExpanded = require('dotenv-expand')

const params = dotenv.config();
const paramsExt = dotenvExpanded(params).parsed;

module.exports = paramsExt;