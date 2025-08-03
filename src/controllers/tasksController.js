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

// PUT /tasks/:id - Atualiza uma tarefa específica
async function updateTask(req, res) {
  try {
    const updated = await tasksService.updateTask(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json(updated);
  } catch (err) {
    console.error('Erro ao atualizar tarefa:', err);
    res.status(500).json({ error: 'Erro interno ao atualizar tarefa' });
  }
}

module.exports = {
  listTasks,
  createTask,
  updateTask,
};
