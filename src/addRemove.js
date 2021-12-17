// eslint-disable-next-line import/no-cycle
import { addBox, displayList, clearButton } from './index.js';
import {
  myList, saveValue, TODO,
} from './statusCheck.js';

// Adds task to collection
const addTask = (e) => {
  if (e.key === 'Enter' && addBox.value !== '') {
    const newTodo = new TODO();
    newTodo.description = addBox.value;
    newTodo.index = myList.taskCollection.length;
    myList.taskCollection.push(newTodo);
    addBox.value = '';
    saveValue();
    displayList();
  }
};

// Updates the task description
const editTask = () => {
  const editBoxes = document.querySelectorAll('.taskDescription');
  for (let i = 0; i < editBoxes.length; i += 1) {
    editBoxes[i].addEventListener('focus', () => {
      editBoxes[i].parentNode.classList.add('editable');
    });
    editBoxes[i].addEventListener('keydown', ({ key }) => {
      if (key === 'Enter' && editBoxes[i].innerText !== '') {
        myList.taskCollection[i].description = editBoxes[i].innerText;
        saveValue();
        editBoxes[i].blur();
      }
    });
    editBoxes[i].addEventListener('blur', () => {
      editBoxes[i].parentNode.classList.remove('editable');
    });
  }
};

// Deletes one task
const deleteTask = (i) => {
  if (i) {
    const removeIndex = parseInt(i.path[0].id, 10);
    const newCollection = myList.taskCollection.filter((TODO) => TODO.index !== removeIndex);
    myList.taskCollection = newCollection;
    saveValue();
    displayList();
  }
};

// Clears all completes tasks
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
  });
};

export {
  addTask, editTask, deleteTask, clearAll,
};
