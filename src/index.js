import './style.css';
import Img from './assets/rotateArrow.png';
import enter from './assets/enter.png';
import Tasks from './modules/CRUD.js';
import { checkSelected, clearAll } from './modules/statusUpdate.js';

const tasksContainer = document.getElementById('tasks');
const rotateArrow = document.getElementById('rotate-arrow');
const enterIcon = document.getElementById('enter-icon');
const form = document.getElementById('form');

rotateArrow.src = Img;
enterIcon.src = enter;

Tasks.localStorageData().forEach((task, index) => {
  tasksContainer.innerHTML += `
 
  <li class="task-list">
  <input type="checkbox" class="checkbox">
  <input type="text" id="${index + 1}" class="editable-input-field" value="${task.description}">
  <button type="button" class="each-task-btn"></button>
  <button type="button" id="${index + 1}" class="trash"></button>
  </li>`;
});

// refresh Icon implementation
document.getElementById('rotate-arrow').addEventListener('click', () => {
  window.location.reload();
});
// to implement click event and change the icon to trash.
const allTaskLists = document.querySelectorAll('.task-list');
allTaskLists.forEach((taskList) => {
  taskList.addEventListener('click', () => {
    taskList.lastElementChild.previousElementSibling.style.display = 'none';
    taskList.lastElementChild.style.display = 'block';
  });
});
// to change the icon when the focus is left.
allTaskLists.forEach((taskList) => {
  taskList.addEventListener('focusout', () => {
    taskList.lastElementChild.previousElementSibling.style.display = 'block';
    taskList.lastElementChild.style.display = 'none';
  });
});

const allTrashBtn = document.querySelectorAll('.trash');
allTrashBtn.forEach((eachTrashBtn) => {
  eachTrashBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
    Tasks.remove(e.target.id);
  });
});

const editTask = document.querySelectorAll('.editable-input-field');
editTask.forEach((eachInputField, fieldId) => {
  eachInputField.addEventListener('change', (e) => {
    Tasks.update(e.target.value, fieldId);
  });
});

const checkbox = document.querySelectorAll('.checkbox');
checkbox.forEach((eachCheckBox, index) => {
  eachCheckBox.addEventListener('change', () => {
    const returnedInputField = document.querySelectorAll('.editable-input-field')[index];
    if (eachCheckBox.checked) {
      returnedInputField.style.textDecoration = 'line-through';
      checkSelected(index);
    } else {
      returnedInputField.style.textDecoration = 'none';
      checkSelected(index);
    }
  });
});

const clearAllBtn = document.getElementById('clear');
clearAllBtn.addEventListener('click', () => {
  clearAll();
});

form.addEventListener('change', () => {
  const taskInputField = document.getElementById('add-input');
  const descrptn = taskInputField.value;
  Tasks.add(descrptn);
  window.location.reload();
});
