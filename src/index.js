const awsSE = require('aws-serverless-express');

const app = require('./app');

const server = awsSE.createServer(app);

exports.handler = (event, context) =>{
    awsSE.proxy(server, event, context);
} 