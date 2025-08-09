# FrontEndToDoList

# 📝 Front-end To-Do List

Este é um front-end simples desenvolvido para testar a API de To-Do List criada em Node.js com MongoDB. Ele permite criar, listar, atualizar e deletar tarefas consumindo a API.

---

## 🛠 Tecnologias Utilizadas

- HTML
- CSS 
- JavaScript (ES6+)
- Fetch API para comunicação com a API REST

---

## 📂 Estrutura dos Arquivos
```
/front-end
│── index.html # Página principal
│── style.css # Estilos básicos (se aplicável)
│── main.js # Lógica principal para manipular tarefas
│── taskBuilder.js # Funções para criar os elementos DOM das tarefas
│── index.js # Funções auxiliares para chamadas à API (CRUD)
```

---

## ⚙️ Como usar

1. Certifique-se de que sua API esteja rodando localmente, por exemplo, em `http://127.0.0.1:5000`.

2. Abra o arquivo `index.html` no navegador.

3. Você poderá:
   - Visualizar todas as tarefas existentes na API.
   - Criar novas tarefas usando o campo de texto e o botão "Adicionar".
   - Atualizar o título de uma tarefa clicando no ícone de edição e pressionando Enter.
   - Marcar a tarefa como concluída clicando no ícone de status.
   - Deletar a tarefa clicando no ícone de lixeira.

---

## 📄 Principais funcionalidades do código

### `taskBuilder.js`

- Função `createATaskOnHtml(task, container)`: cria os elementos HTML para cada tarefa, adicionando ícones para marcar como concluída, editar título e deletar.

### `index.js`

- Funções que fazem chamadas à API usando `fetch()`:
  - `getAllTasks()` — busca todas as tarefas e as renderiza.
  - `createTask()` — cria uma nova tarefa.
  - `updateTitleOfTask(taskId, status, title)` — atualiza o título e status da tarefa.
  - `updateStatusOfTask(taskId, title, status)` — alterna o status de concluído.
  - `deleteTask(taskId)` — remove a tarefa.

- Eventos configurados para lidar com cliques nos botões e ações do usuário.

---

## 🧩 Requisitos

- Navegador moderno com suporte a JavaScript ES6+
- API de tarefas rodando e acessível no endereço configurado (por exemplo, `http://127.0.0.1:5000/api/tasks`)

---

## 💡 Possíveis melhorias

- Melhorar o layout visual com CSS.
- Adicionar validação de entrada para títulos vazios.
- Tratar erros na interface do usuário (exibir mensagens amigáveis).
- Refatorar para usar frameworks/bibliotecas (React, Vue, etc) para escalar melhor.

---

Se precisar de ajuda para montar o arquivo HTML completo ou integração, só avisar!

## Esse READ.ME foi criado com o auxílio de Inteligência Artificial.

