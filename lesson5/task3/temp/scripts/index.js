import { initTodoListHandlers } from './todolist.js';
import { renderTasks } from './rendering.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';
document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);