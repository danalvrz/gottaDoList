import { Collection, TODO, saveValue } from '../statusCheck.js';

const mockListB = new Collection();
const mockItem = new TODO('water plants', false, 0);
const mockItem2 = new TODO('do dishes', false, 1);
mockListB.taskCollection.push(mockItem);
mockListB.taskCollection.push(mockItem2);

const deleteTask = (i) => {
  if (i) {
    const removeIndex = parseInt(i.path[0].id, 10);
    const newCollection = mockListB.taskCollection.filter((TODO) => TODO.index !== removeIndex);
    mockListB.taskCollection = newCollection;
    saveValue();
  }
};

exports.deleteTask = deleteTask;
exports.mockListB = mockListB;