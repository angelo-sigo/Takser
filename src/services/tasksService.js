const { v4: uuidv4 } = require('uuid');
const tasksRepository = require('../repositories/tasksRepository');

// Retorna todas as tarefas
async function getAllTasks() {
  return await tasksRepository.readTasks();
}

// Adiciona uma nova tarefa
async function addTask(taskData) {
  const tasks = await tasksRepository.readTasks();

  const newTask = {
    id: uuidv4(),
    title: taskData.title,
    done: taskData.done
  };

  tasks.push(newTask);
  await tasksRepository.writeTasks(tasks);
  return newTask;
}

// Outros métodos futuros (ex: updateTask, deleteTask, getTaskById, etc.)

module.exports = {
  getAllTasks,
  addTask
};
