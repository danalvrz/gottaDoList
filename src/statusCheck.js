/* eslint-disable max-classes-per-file */

class Collection {
  constructor() {
    this.taskCollection = [];
  }
}

class TODO {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const myList = new Collection();

// Store tasks array
function saveValue() {
  const saveCollection = JSON.stringify(myList.taskCollection);
  localStorage.setItem('taskCollection', saveCollection);
}

// Get tasks array
function getValue() {
  if (localStorage.getItem('taskCollection')) {
    myList.taskCollection = JSON.parse(localStorage.getItem('taskCollection'));
    saveValue();
  }
}

// Check completed status
function checkStatus() {
  const cbox = document.querySelectorAll('.checkbox');
  for (let i = 0; i < cbox.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    cbox[i].addEventListener('change', () => {
      if (cbox[i].checked === true) {
        cbox[i].parentNode.classList.add('checked');
        myList.taskCollection[i].completed = true;
        saveValue();
      } else if (cbox[i].checked !== true) {
        cbox[i].parentNode.classList.remove('checked');
        myList.taskCollection[i].completed = false;
        saveValue();
      }
    });
  }
}

export {
  checkStatus, saveValue, getValue, myList, TODO, Collection,
};
