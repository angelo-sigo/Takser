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

// DELETE /tasks/:id - Remove uma tarefa
async function deleteTask(req, res, next) {
  try {
    const deleted = await tasksService.deleteTask(req.params.id);
    if (!deleted) {
      const error = new Error('Tarefa não encontrada');
      error.status = 404;
      throw error;
    }
    res.status(204).end(); // No Content, pois delete não retorna corpo
  } catch (err) {
    next(err);
  }
}

module.exports = { listTasks, createTask, updateTask, deleteTask };
