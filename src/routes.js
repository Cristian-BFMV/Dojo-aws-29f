const express = require('express');
const getTodos = require('./services/get-todos');
const router = express.Router();

router.get('/todos', getTodos);


module.exports = router;