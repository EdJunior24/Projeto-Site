const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('paginas'));

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    try {
      res.status(200).json({ status: true, resposta: "Seja bem-vindo"});
    } catch (e) {
      console.log(e);
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado! ${port}`);
});