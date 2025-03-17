const express = require('express');
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
const app = express();

app.use(express.json());
app.use(express.static('paginas'));

const publicRoutes = require('./routes/public');
const privateRoutes = require('./routes/private');

app.use('/', publicRoutes);
app.use('/', privateRoutes);

app.listen(port, host, () => {
    console.log(`Servidor iniciado!`);
});