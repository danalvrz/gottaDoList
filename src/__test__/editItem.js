import { Collection, TODO, saveValue } from '../statusCheck.js';

const mockList = new Collection();
const mockItem = new TODO('water plants', false, 0);
mockList.taskCollection.push(mockItem);

// Updates the task description
const editTask = (key, editBoxes, i) => {
  if (key === 'Enter' && editBoxes[i].innerText !== '') {
    mockList.taskCollection[i].description = editBoxes[i].innerText;
    saveValue();
  }
};

// Updates the task description
const updateTask = (cbox, i) => {
  if (cbox[i].checked === true) {
    mockList.taskCollection[i].completed = true;
    saveValue();
  } else if (cbox[i].checked !== true) {
    mockList.taskCollection[i].completed = false;
    saveValue();
  }
};

const clearAll = (checkedCollection) => {
  for (let i = 0; i < mockList.taskCollection.length; i += 1) {
    if (mockList.taskCollection[i].completed === true) {
      checkedCollection.push(mockList.taskCollection[i]);
    }
  }
  mockList.taskCollection = mockList.taskCollection.filter((x) => !checkedCollection.includes(x));
  saveValue();
};

exports.clearAll = clearAll;
exports.updateTask = updateTask;
exports.editTask = editTask;
exports.mockList = mockList;
