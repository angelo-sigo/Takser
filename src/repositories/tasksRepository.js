const fs = require('fs').promises;
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'tasks.json');

async function readTasks() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (err) {
    console.error('Erro ao ler o arquivo de tarefas:', err);
    return [];
  }
}

async function writeTasks(tasks) {
  try {
    const jsonContent = JSON.stringify(tasks, null, 2);
    await fs.writeFile(dataFilePath, jsonContent);
  } catch (err) {
    console.error('Erro ao escrever no arquivo de tarefas:', err);
  }
}

module.exports = {
  readTasks,
  writeTasks,
};
