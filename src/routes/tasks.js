const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');
const validateTask = require('../middlewares/validateTask');

router.get('/', tasksController.listTasks);
router.post('/', validateTask, tasksController.createTask);
router.put('/:id', validateTask, tasksController.updateTask);

module.exports = router;
