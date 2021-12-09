// eslint-disable-next-line import/no-cycle
import { addBox, displayList, clearButton } from './index.js';
import {
  myList, saveValue, checkStatus, TODO,
} from './statusCheck.js';

const addTask = () => {
  addBox.addEventListener('keydown', ({ key }) => {
    if (key === 'Enter' && addBox.value !== '') {
      const newTodo = new TODO();
      newTodo.description = addBox.value;
      newTodo.index = myList.taskCollection.length;
      myList.taskCollection.push(newTodo);
      addBox.value = '';
      checkStatus();
      saveValue();
      displayList();
    }
  });
};

const editTask = () => {
  const editBoxes = document.querySelectorAll('.taskDescription');
  for (let i = 0; i < editBoxes.length; i += 1) {
    editBoxes[i].addEventListener('focus', () => {
      editBoxes[i].parentNode.classList.add('editable');
    });
    editBoxes[i].addEventListener('keydown', ({ key }) => {
      if (key === 'Enter' && editBoxes[i].innerText !== '') {
        myList.taskCollection[i].description = editBoxes[i].innerText;
        editBoxes[i].blur();
        saveValue();
      }
    });
    editBoxes[i].addEventListener('blur', () => {
      editBoxes[i].parentNode.classList.remove('editable');
    });
  }
};

const deleteTask = () => {
  const trashCans = document.querySelectorAll('.trashCan');
  for (let i = 0; i < trashCans.length; i += 1) {
    trashCans[i].addEventListener('click', () => {
      const newCollection = myList.taskCollection.filter(
        (TODO) => TODO.index !== myList.taskCollection[i].index,
      );
      myList.taskCollection = newCollection;
      displayList();
      checkStatus();
      editTask();
    });
  }
};
const checkedCollection = [];
const clearAll = () => {
  clearButton.addEventListener('click', () => {
    for (let i = 0; i < myList.taskCollection.length; i += 1) {
      if (myList.taskCollection[i].completed === true) {
        checkedCollection.push(myList.taskCollection[i]);
      }
    }
    myList.taskCollection = myList.taskCollection.filter((x) => !checkedCollection.includes(x));
    saveValue();
    displayList();
    checkStatus();
  });
};

export {
  addTask, editTask, deleteTask, clearAll,
};
