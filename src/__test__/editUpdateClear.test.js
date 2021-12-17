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
  it('clears TODO which completed value is true', () => {
    const checkedCollection = [];
    mockList.taskCollection[0].completed = true;
    clearAll(checkedCollection);
    expect(mockList.taskCollection.length).toBe(0);
  });

  // Test to check that localStorage is being mocked
  it('saveValue() should not have saved to localStorage', () => {
    const KEY = 'foo';
    const VALUE = 'bar';
    saveValue(KEY, VALUE);
    expect(localStorage.setItem).not.toHaveBeenLastCalledWith(KEY, VALUE);
  });
});