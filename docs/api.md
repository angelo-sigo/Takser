# Documentação da API — Takser

Este documento descreve as rotas disponíveis na API do Tasker, bem como seus métodos, parâmetros esperados e respostas.

> ⚠️ Esta API está em desenvolvimento ativo. Novas rotas e melhorias serão adicionadas em atualizações futuras.

## 🔷 URL Base

```
http://localhost:3000
```

---

## 📌 Rotas

### Criar uma nova tarefa

- **Método:** POST
- **Endpoint:** `/tasks`
- **Corpo da requisição:** 

```json
{
    "title": "Comprar pão",
    "done": false
}
```

> ℹ️ O campo `id` **não deve ser enviado pelo cliente** — ele é gerado automaticamente pelo sistema.

> ✅ Esta rota já conta com validação dos dados de entrada (tipos e campos obrigatórios), feita com a biblioteca Joi.

---

### Listar todas as tarefas

- **Método:** GET
- **Endpoint:** `/tasks`
- **Resposta:** 

```json
[
  {
    "id": "abc123",
    "title": "Comprar pão",
    "done": false
  },
  ...
]
```
