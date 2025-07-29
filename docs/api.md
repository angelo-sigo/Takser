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
    "id": "abc123",
    "title": "Comprar pão",
    "done": false
}
```

> ⚠️ **Geração de ID automática** ainda será implementada. Por enquanto, é necessário enviar o campo `id` manualmente no corpo da requisição.

> ⚠️ A  **validação dos dados de entrada** (como tipos, campos obrigatórios e formatos) será adicionada em versões futuras para aumentar a segurança da aplicação.

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
