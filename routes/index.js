"use strict";

const routes = require('express').Router();
const npmAPI = require('../npmAPI');

require('./downloads')(routes, npmAPI);

module.exports = routes;
