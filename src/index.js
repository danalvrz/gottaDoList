/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import Refresh from './refresh.png';
import DeleteIcon from './delete.png';
import {
  checkStatus, getValue, myList, saveValue,
} from './statusCheck.js';
// eslint-disable-next-line import/no-cycle
import {
  addTask, editTask, deleteTask, clearAll,
} from './addRemove.js';

const wrapper = document.getElementById('wrapper');

// List title
const listTitle = document.createElement('h1');
listTitle.innerHTML = `Today's To Do <span class="refresh"><img src="${Refresh}" width="15" class=""/></span>`;
listTitle.classList.add('list-title');

// List container
const list = document.createElement('ul');
list.classList.add('list');
list.id = 'taskList';

// AddBox
const addBoxContainer = document.createElement('div');
const addBox = document.createElement('input');
addBox.placeholder = 'Add to your list...';
addBox.id = 'addBox';
addBoxContainer.appendChild(addBox);

// Collection iteration
const displayList = () => {
  list.innerHTML = '';
  for (let i = 0; i < myList.taskCollection.length; i += 1) {
    myList.taskCollection[i].index = i;
    const listItem = document.createElement('li');
    listItem.classList.add('listItem');
    listItem.innerHTML = `<input type="checkbox" class="checkbox" /><label contenteditable="true" class="taskDescription" type="text">${myList.taskCollection[i].description}</label><span class="deteleTask"><img src="${DeleteIcon}" class="trashCan"/></span>`;
    if (myList.taskCollection[i].completed === true) {
      listItem.classList.add('checked');
      listItem.children[0].checked = true;
    }
    list.appendChild(listItem);
  }
  checkStatus();
  deleteTask();
  editTask();
  saveValue();
};

// Clear all button
const clearButton = document.createElement('button');
clearButton.innerText = 'Clear All Completed';
clearButton.classList.add('clearButton');

wrapper.appendChild(listTitle);
wrapper.appendChild(addBoxContainer);
wrapper.appendChild(list);
wrapper.appendChild(clearButton);

getValue();

addBox.addEventListener('keydown', addTask);

displayList();
const trashCans = document.querySelectorAll('.trashCan');
console.log(trashCans);
for (let i = 0; i < trashCans.length; i += 1) {
  trashCans[i].addEventListener('click', deleteTask);
}

editTask();
clearAll();

export {
  addBox, displayList, clearButton,
};
