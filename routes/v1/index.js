const routes = require('express').Router();
const path = require('path');
const example = require('./demo');

routes.use('/demo', example);

module.exports = routes;