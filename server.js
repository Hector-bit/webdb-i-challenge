const express = require('express');

const customerRouter = require('./data/customers/customers-route');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', customerRouter);

server.get('/', (req, res) => {
    res.send('Hello world');
})

module.exports = server;