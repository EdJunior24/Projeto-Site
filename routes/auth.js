const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
   const { nameUser, senhaUser } = req.body;

   if (nameUser === 'Tiago' && senhaUser === '123') {
      return res.json({ status: true });
   } else {
      return res.status(403).json({ status: false, erro: "Não permitido!" });
   }
});

module.exports = router;