"use strict";

const _ = require('lodash/object');

const npmAPIurl = 'https://api.npmjs.org';

let api = {};

const constants = require('./constants.json');
api = _.merge(api, constants);

const downloadsAPI = require('./downloads')(npmAPIurl);
api = _.merge(api, downloadsAPI);

module.exports = api;
