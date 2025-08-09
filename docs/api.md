# Documentação da API — Takser

Este documento descreve as rotas disponíveis na API do Takser, bem como seus métodos, parâmetros esperados, respostas e possíveis erros.

> ⚠️ Esta API está em desenvolvimento ativo. Novas rotas e melhorias serão adicionadas em atualizações futuras.

## 🔷 URL Base

```  
http://localhost:3000  
```

---

## 📌 Rotas

| Método | Endpoint     | Descrição                     |         
|--------|--------------|------------------------------|
| POST   | `/tasks`     | Cria uma nova tarefa          |
| GET    | `/tasks`     | Lista todas as tarefas        |
| PUT    | `/tasks/:id` | Atualiza uma tarefa existente |

---

### 1. Criar uma nova tarefa

| Campo | Tipo    | Obrigatório | Descrição                                |
|-------|---------|-------------|------------------------------------------|
| title | string  | Sim         | Título da tarefa                         |
| done  | boolean | Sim         | Status de conclusão (true = concluída)   |

**Corpo da requisição:**

```json
{
  "title": "Comprar pão",
  "done": false
}
```

**Respostas possíveis:**

| Código | Descrição                        | Exemplo de corpo                                                               |
|--------|----------------------------------|--------------------------------------------------------------------------------|
| 201    | Tarefa criada com sucesso        | `json { "id": "uuid", "title": "Comprar pão", "done": false } `                |
| 400    | Dados inválidos (validação Joi)  | `json { "error": "Dados inválidos", "details": ["\"title\" é obrigatório"] } ` |
| 415    | Content-Type inválido            | `json { "error": "Content-Type deve ser application/json" } `                  |

> ℹ️ O campo `id` **não deve ser enviado pelo cliente** — ele é gerado automaticamente pelo sistema.

---

### 2. Listar todas as tarefas

**Requisição:** `GET /tasks`

**Resposta de sucesso (200):**

```json
[
  {
    "id": "uuid",
    "title": "Comprar pão",
    "done": false
  },
  ...
]
```

---

### 3. Atualizar uma tarefa existente

| Campo | Tipo    | Obrigatório | Descrição                         |
|-------|---------|-------------|-----------------------------------|
| title | string  | Sim         | Novo título da tarefa             |
| done  | boolean | Sim         | Novo status de conclusão          |

**Endpoint:** `PUT /tasks/:id`

**Corpo da requisição:**

```json
{
  "title": "Comprar leite",
  "done": true
}
```

**Respostas possíveis:**

| Código | Descrição                        | Exemplo de corpo                                                                    |
|--------|----------------------------------|-------------------------------------------------------------------------------------|
| 200    | Tarefa atualizada com sucesso    | `json { "id": "uuid", "title": "Comprar leite", "done": true } `                    |
| 400    | Dados inválidos (validação Joi)  | `json { "error": "Dados inválidos", "details": ["\"done\" deve ser booleano"] } `   |
| 404    | Tarefa não encontrada            | `json { "error": "Tarefa não encontrada" } `                                        |

> ⚠️ Todos os campos enviados no método `PUT` são obrigatórios, mesmo para atualização parcial.

---

### 4. Tratamento de erros padrão

Todos os erros retornam uma resposta JSON no seguinte formato:

```json
{
  "error": "Mensagem descritiva do erro"
}
```

Para erros de validação (400), pode ser retornado um campo adicional `details` com uma lista de mensagens explicativas, por exemplo:

```json
{
  "error": "Dados inválidos",
  "details": [
    "\"title\" é obrigatório",
    "\"done\" deve ser booleano"
  ]
}
```
