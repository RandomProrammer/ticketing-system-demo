const model = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObject = require('../utils/findObject');

model.param('modelId', findObject('model'));

model.get('/', all);
model.get('/:modelId', single);

module.exports = model;