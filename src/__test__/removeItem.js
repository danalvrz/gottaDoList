import { Collection, TODO, saveValue } from '../statusCheck.js';

const mockList = new Collection();
const mockItem = new TODO('water plants', false, 0);
mockList.taskCollection.push(mockItem);

const deleteTask = () => {
  const trashCans = document.querySelectorAll('.trashCan');
  for (let i = 0; i < trashCans.length; i += 1) {
    trashCans[i].addEventListener('click', () => {
      const newCollection = mockList.taskCollection.filter(
        (TODO) => TODO.index !== mockList.taskCollection[i].index,
      );
      mockList.taskCollection = newCollection;
      saveValue();
    });
  }
};

exports.deleteTask = deleteTask;
exports.mockList = mockList;