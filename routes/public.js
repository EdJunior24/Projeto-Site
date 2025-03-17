const {Router} = require('express');
const router = Router();
const path = require('path');

router.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../paginas/home.html'))
})

router.get('/login', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../paginas/login.html'))
})

router.get('/registro', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../paginas/registro.html'))
})

module.exports = router;