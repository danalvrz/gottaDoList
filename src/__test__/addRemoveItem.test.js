/**
 * @jest-environment jsdom
 */

const { addTask } = require('./addItem.js');
const { mockList } = require('./addItem.js');

describe('addDelete', () => {
  it('Adds new TODO to taskCollection array', () => {
    const e = {};
    e.key = 'Enter';
    const addBox = {};
    addBox.value = 'wash dishes';
    addTask(e, addBox);
    expect(mockList.taskCollection.length).toBe(2);
  });

  it('addBox.value becomes new TODO.description', () => {
    const e = {};
    e.key = 'Enter';
    const addBox = {};
    addBox.value = 'wash dishes';
    addTask(e, addBox);
    expect(mockList.taskCollection[1].description).toBe('wash dishes');
  });

  it('Resets addBox.value back to an empty string', () => {
    const e = {};
    e.key = 'Enter';
    const addBox = {};
    addBox.value = 'wash dishes';
    addTask(e, addBox);
    expect(addBox.value).toBe('');
  });
});