const express = require('express');
const api = express();
const serviceSeeds = require('./services');

api.get('/', serviceSeeds.getSeeds);
api.get('/gateway', serviceSeeds.getSensor);

module.exports = api;