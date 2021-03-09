const routes = require('express').Router();
const path = require('path');
const apiv1 = require('./v1');

routes.use('/v1', apiv1);

routes.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'reactBuild', 'index.html'));
});

module.exports = routes;