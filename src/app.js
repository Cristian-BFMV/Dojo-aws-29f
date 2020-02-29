const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const aswMiddleware = require('aws-serverless-express/middleware');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(aswMiddleware.eventContext());

app.use('/', routes);

module.exports = app;
