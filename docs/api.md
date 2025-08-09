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
|--------|--------------|-------------------------------|
| POST   | `/tasks`     | Cria uma nova tarefa          |
| GET    | `/tasks`     | Lista todas as tarefas        |
| PUT    | `/tasks/:id` | Atualiza uma tarefa existente |
| DELETE | `/tasks/:id` | Remove uma tarefa existente   |

---

### 1. Criar uma nova tarefa

**Endpoint:** `POST /tasks`

**Corpo da requisição:**

```json
{
  "title": "Comprar pão",
  "done": false
}
```

| Campo | Tipo    | Obrigatório | Descrição           |
|-------|---------|-------------|---------------------|
| title | string  | Sim         | Título da tarefa    |
| done  | boolean | Sim         | Status de conclusão |

**Respostas possíveis:**

| Código | Descrição                        | Exemplo de resposta                                                      |
|--------|----------------------------------|--------------------------------------------------------------------------|
| 201    | Tarefa criada com sucesso        | `{ "id": "uuid", "title": "Comprar pão", "done": false }`                |
| 400    | Dados inválidos (validação Joi)  | `{ "error": "Dados inválidos", "details": ["\"title\" é obrigatório"] }` |
| 415    | Content-Type inválido            | `{ "error": "Content-Type deve ser application/json" }`                  |

> ⚠️ O campo `id` **não deve ser enviado pelo cliente** — ele é gerado automaticamente pelo sistema.

---

### 2. Listar todas as tarefas

**Endpoint:** `GET /tasks`

**Respostas possíveis:**

| Código | Descrição                  | Exemplo de resposta                                         |
|--------|----------------------------|-------------------------------------------------------------|
| 200    | Lista de tarefas retornada | `[{ "id": "uuid", "title": "Comprar pão", "done”: false }]` |

---

### 3. Atualizar uma tarefa existente

**Endpoint:** `PUT /tasks/:id`

**Corpo da requisição:**

```json
{
  "title": "Comprar pão",
  "done": true
}
```

| Campo | Tipo    | Obrigatório | Descrição                         |
|-------|---------|-------------|-----------------------------------|
| title | string  | Sim         | Novo título da tarefa             |
| done  | boolean | Sim         | Novo status de conclusão          |

**Respostas possíveis:**

| Código | Descrição                        | Exemplo de corpo                                                              |
|--------|----------------------------------|-------------------------------------------------------------------------------|
| 200    | Tarefa atualizada com sucesso    | `{ "id": "uuid", "title": "Comprar leite", "done": true }`                    |
| 400    | Dados inválidos (validação Joi)  | `{ "error": "Dados inválidos", "details": ["\"done\" deve ser booleano"] }`   |
| 404    | Tarefa não encontrada            | `{ "error": "Tarefa não encontrada" }`                                        |

> ⚠️ Todos os campos enviados no método `PUT` são obrigatórios, mesmo para atualização parcial.

---

### 4. Excluir uma tarefa existente

**Endpoint:** `DELETE /tasks/:id`

**Respostas possíveis:**

| Código | Descrição                      | Exemplo de resposta                       |
|--------|--------------------------------|-------------------------------------------|
| 204    | Tarefa removida com sucesso    | *(sem corpo na resposta)*                 |
| 404    | Tarefa não encontrada          | `{ "error": "Tarefa não encontrada" }`    |

### 5. Tratamento de erros padrão

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
