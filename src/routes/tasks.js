const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: 'listando todas as tarefas'});
});

module.exports = router;
