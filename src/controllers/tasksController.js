const tasksService = require('../services/tasksService');

// GET /tasks - Lista todas as tarefas
async function listTasks(req, res) {
  try {
    const tasks = await tasksService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    console.error('Erro ao listar tarefas:', err);
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
}

// POST /tasks - Adiciona uma nova tarefa
async function createTask(req, res) {
  try {
    const newTask = req.body;
    const createdTask = await tasksService.addTask(newTask);
    res.status(201).json(createdTask);
  } catch (err) {
    console.error('Erro ao criar tarefa:', err);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
}

module.exports = {
  listTasks,
  createTask,
};
