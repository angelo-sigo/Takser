const tasksRepository = require('../repositories/tasksRepository');

// Retorna todas as tarefas
async function getAllTasks() {
  return await tasksRepository.readTasks();
}

// Adiciona uma nova tarefa
async function addTask(task) {
  const tasks = await tasksRepository.readTasks();
  tasks.push(task);
  await tasksRepository.writeTasks(tasks);
  return task;
}

// Outros métodos futuros (ex: updateTask, deleteTask, getTaskById, etc.)

module.exports = {
  getAllTasks,
  addTask
};
