/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import Refresh from './refresh.png';
import {
  checkStatus, getValue, taskCollection,
} from './statusCheck.js';

const wrapper = document.getElementById('wrapper');

class TODO {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

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

// Clear all button
const clearButton = document.createElement('button');
clearButton.innerText = 'Clear All Completed';
clearButton.classList.add('clearButton');

// Collection iteration
const displayList = () => {
  list.innerHTML = '';
  for (let i = 0; i < taskCollection.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('listItem');
    listItem.innerHTML = `<input type="checkbox" class="checkbox"/><label contenteditable="true">${taskCollection[i].description}</label>`;
    if (taskCollection[i].completed === true) {
      listItem.classList.add('checked');
      listItem.children[0].checked = true;
    }
    list.appendChild(listItem);
  }
};

wrapper.appendChild(listTitle);
wrapper.appendChild(addBoxContainer);
wrapper.appendChild(list);
wrapper.appendChild(clearButton);
getValue();
displayList();
checkStatus();
