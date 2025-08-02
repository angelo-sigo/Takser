const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const validateTask = require('../middlewares/validateTask');

router.get('/', tasksController.listTasks);
router.post('/', validateTask, tasksController.createTask);

module.exports = router;
