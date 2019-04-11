const express = require('express');

const server = express();

server.get('/animals/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.get('/animals/:id', (req, res) => {
    id = req.params.id;
    res.status(200).json({ api: 'running' });
});

server.post('/animals/', (req, res) => {
    id = req.params.id;
    res.status(200).json({ api: 'running' });
});

module.exports = server;