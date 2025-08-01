const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.listTasks);
router.post('/', tasksController.createTask);

module.exports = router;
