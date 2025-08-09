const tasksService = require('../services/tasksService');

// GET /tasks - Lista todas as tarefas
async function listTasks(req, res, next) {
  try {
    const tasks = await tasksService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
}

// POST /tasks - Cria nova tarefa
async function createTask(req, res, next) {
  try {
    const task = await tasksService.addTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
}

// PUT /tasks/:id - Atualiza tarefa
async function updateTask(req, res, next) {
  try {
    const updated = await tasksService.updateTask(req.params.id, req.body);
    if (!updated) {
      const error = new Error('Tarefa não encontrada');
      error.status = 404;
      throw error;
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

module.exports = { listTasks, createTask, updateTask };
