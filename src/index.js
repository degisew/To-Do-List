import './style.css';
import Img from './assets/rotateArrow.png';
import enter from './assets/enter.png';

const tasksContainer = document.getElementById('tasks');
const rotateArrow = document.getElementById('rotate-arrow');
const enterIcon = document.getElementById('enter-icon');
// const titleDiv = document.querySelector('.title');
rotateArrow.src = Img;
enterIcon.src = enter;

const tasks = [
  {
    description: 'went to market',
    completed: false,
    index: 0,
  },
  {
    description: 'finish my project',
    completed: false,
    index: 1,
  },
  {
    description: 'washing clothes',
    completed: false,
    index: 2,
  },
];

//  <div class="each-list-container"></div>
tasks.forEach((task) => {
  tasksContainer.innerHTML += `
 
  <li><input type="checkbox" class="checkbox">
  <input type="text" value="${task.description}">
  <button type="button" class="each-task-btn"></button>
  </li>`;
});
