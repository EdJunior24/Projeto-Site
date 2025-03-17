const express = require('express');
const router = express.Router(); // Criando um roteador Express
const path = require('path');

router.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'paginas', 'home.html'));
});

module.exports = router;
/*
const router = require('./public');
const path = require('path');

router.get('/app', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../paginas/home.html'));
})

module.exports = router;
*/