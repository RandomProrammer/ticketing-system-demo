const routes = require('express').Router();
const lines = require('./lines');
const models = require('./models');

routes.use('/models', models);
routes.use('/lines', lines);

module.exports = routes;