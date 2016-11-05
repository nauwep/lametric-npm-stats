"use strict";

const express = require('express');
const routes = require('./routes');

var env = process.env.NODE_ENV;
if (!env) {
    env = process.env.NODE_ENV = 'production';
}

let port = process.env.PORT || '8080';
let app = express();

app.use('/', routes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
