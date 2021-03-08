const routes = require('express').Router();
const apiv1 = require('./v1');

routes.use('/v1', apiv1);

module.exports = routes;