# Takser — Gerenciador de Tarefas

> Organize suas tarefas com facilidade. **Takser** é um gerenciador de tarefas simples, direto e acessível, criado para ajudar qualquer pessoa a ter mais foco e produtividade no dia a dia.

## 🏁 Primeiros Passos

Siga este passo a passo para rodar o projeto localmente, mesmo se você nunca trabalhou com `Node.js` antes.

### ✅ Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/) e o [NPM](npmjs.com) instalados no seu dispositivo.

---

### 📥 1. Baixe o projeto

No terminal digite:

```bash
git clone https://github.com/angelo-sigo/Takser.git
```

---

### 📂 2. Acesse a pasta do projeto

```bash
cd Takser
```

---

### 📦 3. Instale as dependências

```bash
npm install
```

---

### 🔧 4. Inicie o projeto

Esse comando prepara o "banco de dados" (um arquivo `.json`) e inicia o servidor:

```bash
npm start
```

---

### 🟢 5. Tudo pronto!

A API estará rodando localmente em `http://localhost:3000`.

---

### 🧪 Testando a API (opcional)

Você pode testar a API usando o `curl` ou um cliente HTTP (como o [Insomnia](https://insomnia.rest) ou o [Postman](https://www.postman.com/)).

- **Listar todas as tarefas:**

```bash
curl http://localhost:3000/tasks
```

- **Criar uma nova tarefa:**

```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title": "Aprender Node.js", "done": false}'
```

## 🚀 Tecnologias Utilizadas

**Frontend:** 
- HTML
- CSS
- JavaScript (Vanilla)

**Backend:**
- Node.js
- Express
- Dotenv

**Validação de Dados:**
- Joi

**Persistência de Dados:** 
- Armazenamento local com arquivos JSON

> ⚠️ O uso de arquivos JSON como banco de dados é temporário. Essa escolha foi feita por conta de limitações do ambiente de desenvolvimento (smartphone com Termux) e também para acompanhar meu progresso técnico atual. Futuramente, pretendo migrar para uma solução de banco de dados mais robusta, como MongoDB.

**Ambiente de Desenvolvimento:** 
- Executado em Termux (Android)
- Editor: Neovim
- Gerenciador de pacotes: npm

## 📁 Estrutura do Projeto

```bash
.                               
├── src 
│   ├── config
│   │   └── setupDatabase.js
│   ├── controllers
│   │   └── tasksController.js
│   ├── repositories
│   │   └── tasksRepository.js
│   ├── routes
│   │   └── tasks.js
│   ├── services
│   │   └── tasksService.js
│   └── server.js
├── README.md
├── package-lock.json
└── package.json
```

## 🗺️ Roadmap do Projeto

- [X] Configuração do ambiente
- [X] Estrutura básica do backend com Express
- [ ] Primeiras rotas da API (CRUD de tarefas)
- [ ] Interface responsiva e usável
- [ ] Integração com frontend (fetch API)
- [ ] Deploy

## 🖋️ Autor 

### Angelo Silva

- 🎓 Técnico em Informática
- 📚 Desenvolvedor autodidata
- 🚀 Atualmente focado em deaenvolvimento web e projetos fullstack.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Conecte--se-0A66C2?style=for-the-badge)](https://linkedin.com/in/angelo-sigo)
[![Email](https://img.shields.io/badge/Email-Fale%20comigo-0078D4?style=for-the-badge)](mailto:angelosilva.goncalves@outlook.com.br)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Conversar-25D366?style=for-the-badge)](https://wa.me/5561981959841)
