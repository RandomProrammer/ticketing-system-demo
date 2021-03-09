const lines = require('express').Router();
const all = require('./all');
const single = require('./single');
const models = require('./models');
const findObject = require('../utils/findObject');

lines.param('lineId', findObject('line'));

lines.use('/:lineId/models', models);
lines.get('/:lineId', single);
lines.get('/', all);

module.exports = lines;