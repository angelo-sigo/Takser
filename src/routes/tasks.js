const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');
const validateTask = require('../middlewares/validateTask');
const checkJsonContentType = require('../middlewares/checkJsonContentType');

router.get('/', tasksController.listTasks);
router.post('/', checkJsonContentType, validateTask, tasksController.createTask);
router.put('/:id', checkJsonContentType, validateTask, tasksController.updateTask);

module.exports = router;
