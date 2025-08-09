import { createATaskOnHtml } from "./taskBuilder.js";
import { createMsg } from "./msgBuilder.js";

const tasksContainer = document.querySelector(".tasks_container");
const taskInput = document.querySelector("#task_input");
const btnAdd = document.querySelector("#btn_add_task");

export const getAllTasks = async () => {
  tasksContainer.innerHTML = "";
  await fetch("http://127.0.0.1:5000/api/tasks")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((element) => {
        createATaskOnHtml(element, tasksContainer);
      });
    });
};

window.addEventListener("load", async () => {
  getAllTasks();
});

const createTask = async () => {
  const taskTitle = taskInput.value;
  if (taskTitle) {
    await fetch("http://127.0.0.1:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: taskTitle,
      }),
    }).then((response) => {
      if (response.status === 200) {
        createMsg("Task criada com sucesso!", "#040");
      } else if (response.status === 500) {
        createMsg("Erro ao criar a task!", "#f00");
      }
      taskInput.value = "";
    });
  }
};

btnAdd.addEventListener("click", async () => {
  await createTask();
  await getAllTasks();
});

taskInput.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    await createTask();
    await getAllTasks();
  }
});

export const updateTitleOfTask = async (taskId, taskStatus, taskTitle) => {
  const endpoint = "http://127.0.0.1:5000/api/tasks/" + taskId;
  await fetch(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: taskTitle,
      completed: taskStatus,
    }),
  }).then((response) => {
    taskInput.value = "";
  });
};

export const updateStatusOfTask = async (taskId, title, status) => {
  const endpoint = "http://127.0.0.1:5000/api/tasks/" + taskId;
  const updatedStatus = !status;
  await fetch(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      completed: updatedStatus,
    }),
  }).then((response) => {});
};

export const deleteTask = async (taskId) => {
  const endpoint = "http://127.0.0.1:5000/api/tasks/" + taskId;
  await fetch(endpoint, { method: "DELETE" }).then((response) => {
    if (response.status === 200) {
      createMsg("Task deletada com sucesso!", "#040");
    } else if (response.status === 404) {
      createMsg("Tarefa não encontrada!", "#f00");
    } else if (response.status === 500) {
      createMsg("Erro ao deletar a task!", "#f00");
    }
  });
};

// const deleteTask = (task)
