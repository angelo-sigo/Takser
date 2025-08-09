const fs = require('fs').promises;
const path = require('path');

const tasksDir = path.join(__dirname, '..', 'data');
const tasksFile = path.join(tasksDir, 'tasks.json');

async function setupDatabase() {
  try {
    console.log('\x1b[34m📁 Verificando diretório de dados...\x1b[0m');

    await fs.mkdir(tasksDir, { recursive: true });
    console.log('\x1b[32m✅ Diretório verificado/criado:\x1b[0m', tasksDir);

    try {
      await fs.acce6ss(tasksFile);
      console.log('\x1b[32m📄 Arquivo de tarefas já existe:\x1b[0m', tasksFile);
    } catch {
      console.log('\x1b[33m⚠️  Arquivo de tarefas não encontrado. Criando novo...\x1b[0m');
      await fs.writeFile(tasksFile, '[]');
      console.log('\x1b[32m✅ Arquivo de tarefas criado com sucesso!\x1b[0m');
    }

    console.log('\x1b[34m🗂️  Banco de dados JSON inicializado com sucesso!\x1b[0m');
  } catch (err) {
    console.error('\x1b[31m❌ Erro ao inicializar o banco de dados:\x1b[0m', err);
  }
}

(async () => {
  console.log('\x1b[34m🚀 Iniciando setup do banco de dados...\x1b[0m');
  await setupDatabase();
})();
