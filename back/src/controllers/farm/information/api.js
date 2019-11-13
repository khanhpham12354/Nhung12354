const express = require('express');
const api = express();
const serviceInfo = require('./services');
const Auth = require('../../auth/services').authentication;

api.get('/', Auth, serviceInfo.getSubstation);
api.get('/:sub_id', Auth, serviceInfo.getSubById);
api.post('/', Auth, serviceInfo.newSubstation);
api.post('/add_substation', Auth, serviceInfo.addSubToUser);
api.patch('/:sub_id', Auth, serviceInfo.editSub);
api.delete('/:sub_id', Auth, serviceInfo.deleteSub);

module.exports = api;