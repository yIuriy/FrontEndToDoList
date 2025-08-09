import {
  updateStatusOfTask,
  getAllTasks,
  deleteTask,
  updateTitleOfTask,
} from "./index.js";

const createATaskOnHtml = (task, container) => {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task_container");

  const taskId = document.createElement("input");
  taskId.type = "hidden";
  taskId.id = "task_id";
  taskId.value = task._id;

  const taskCompletedIcon = document.createElement("img");
  taskCompletedIcon.src =
    "../icons/" + (task.completed ? "completed" : "notCompleted") + ".svg";
  taskCompletedIcon.id = "task_completed_icon";
  taskCompletedIcon.classList.add("icons");
  taskCompletedIcon.addEventListener("click", async () => {
    await updateStatusOfTask(task._id, task.title, task.completed);
    await getAllTasks();
  });

  const taskTitle = document.createElement("input");
  taskTitle.classList.add("task_title");
  taskTitle.type = "text";
  taskTitle.setAttribute("readonly", "readonly");
  taskTitle.setAttribute("disabled", "disabled");
  taskTitle.value = task.title;

  const taskOptions = document.createElement("div");
  taskOptions.classList.add("task_options");

  const iconEdit = document.createElement("img");
  iconEdit.src = "../icons/edit.svg";
  iconEdit.id = "icon_edit";
  iconEdit.classList.add("icons");
  iconEdit.addEventListener("click", async () => {
    taskTitle.removeAttribute("readonly");
    taskTitle.removeAttribute("disabled");
    taskTitle.focus();
    taskTitle.addEventListener("keypress", async (e) => {
      if (e.key === "Enter") {
        taskTitle.setAttribute("readonly", "readonly");
        taskTitle.setAttribute("disabled", "disabled");
        taskTitle.blur();
        await updateTitleOfTask(task._id, task.completed, taskTitle.value);
        await getAllTasks();
      }
    });
  });

  const iconDelete = document.createElement("img");
  iconDelete.src = "../icons/delete.svg";
  iconDelete.id = "icon_delete";
  iconDelete.classList.add("icons");
  iconDelete.addEventListener("click", async () => {
    await deleteTask(task._id);
    await getAllTasks();
  });

  taskContainer.appendChild(taskCompletedIcon);
  taskContainer.appendChild(taskTitle);
  taskOptions.appendChild(iconEdit);
  taskOptions.appendChild(iconDelete);
  taskContainer.appendChild(taskOptions);
  container.appendChild(taskContainer);
};

export { createATaskOnHtml };
