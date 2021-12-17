/**
 * @jest-environment jsdom
 */

const { saveValue } = require('../statusCheck.js');
const {
  editTask, mockList, updateTask, clearAll,
} = require('./editItem.js');

describe('editUpdateClear', () => {
  it('sets innerText from editBox as TODO.description', () => {
    const key = 'Enter';
    const editBoxes = [{ innerText: 'wash dishes' }];
    const i = 0;
    editTask(key, editBoxes, i);
    expect(mockList.taskCollection[0].description).toBe(editBoxes[i].innerText);
  });

  it('updates TODO.completed as true when checkbox.checked is true', () => {
    const cbox = [{ checked: true }];
    const i = 0;
    updateTask(cbox, i);
    expect(mockList.taskCollection[0].completed).toBe(true);
  });

  it('updates TODO.completed as false when checkbox.checked is false', () => {
    const cbox = [{ checked: false }];
    const i = 0;
    mockList.taskCollection[0].completed = true;
    updateTask(cbox, i);
    expect(mockList.taskCollection[0].completed).toBe(false);
  });
});