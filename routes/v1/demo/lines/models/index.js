const models = require('express').Router({ mergeParams: true });
const all = require('./all');

models.get('/', all);

module.exports = models;