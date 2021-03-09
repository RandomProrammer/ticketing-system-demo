const routes = require('express').Router();
const apiv1 = require('./v1');

routes.use('/v1', apiv1);
routes.get('/', (req, res) => {
	res.send('hello')
});

module.exports = routes;