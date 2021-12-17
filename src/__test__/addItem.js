import { Collection, TODO, saveValue } from '../statusCheck.js';

const mockList = new Collection();
const mockItem = new TODO('water plants', false, 0);
mockList.taskCollection.push(mockItem);

const addTask = (e, addBox) => {
  if (e.key === 'Enter' && addBox.value !== '') {
    const newTodo = new TODO();
    newTodo.description = addBox.value;
    newTodo.index = mockList.taskCollection.length;
    mockList.taskCollection.push(newTodo);
    addBox.value = '';
    saveValue();
  }
};

exports.addTask = addTask;
exports.mockList = mockList;