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

async function updateTask(id, data) {
  const tasks = await tasksRepository.readTasks();
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return null;

  // Atualiza apenas os campos permitidos
  tasks[index].title = data.title;
  tasks[index].done = data.done;

  await tasksRepository.writeTasks(tasks);
  return tasks[index];
}

// Outros métodos futuros (ex: updateTask, deleteTask, getTaskById, etc.)
 

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
};
