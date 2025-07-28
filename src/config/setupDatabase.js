const fs = require('fs').promises;
const path = require('path');

const tasksDir = path.join(__dirname, '..', 'data');
const tasksFile = path.join(tasksDir, 'tasks.json');

async function setupDatabase() {
  try {
    console.log('📁 Verificando diretório de dados...');

    await fs.mkdir(tasksDir, { recursive: true });
    console.log('✅ Diretório verificado/criado:', tasksDir);

    try {
      await fs.access(tasksFile);
      console.log('📄 Arquivo de tarefas já existe:', tasksFile);
    } catch {
      console.log('⚠️  Arquivo de tarefas não encontrado. Criando novo...');
      await fs.writeFile(tasksFile, '[]');
      console.log('✅ Arquivo de tarefas criado com sucesso!');
    }

    console.log('🗂️  Banco de dados JSON inicializado com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao inicializar o banco de dados:', err);
  }
}

(async () => {
  console.log('🚀 Iniciando setup do banco de dados...');
  await setupDatabase();
})();
