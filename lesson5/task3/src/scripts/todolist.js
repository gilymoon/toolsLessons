import { onCreateTask } from "./createTask.js.js";
import { onListClick } from "./updateTask.js.js";

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector(".create-task-btn");
  createBtnElem.addEventListener("click", onCreateTask);

  const todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", onListClick);
};
