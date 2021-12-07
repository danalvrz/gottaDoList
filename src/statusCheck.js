// eslint-disable-next-line import/no-mutable-exports
let taskCollection = [
  { description: 'water plants', completed: false, index: 0 },
  { description: 'do laundry', completed: false, index: 1 },
  { description: 'bake cake', completed: false, index: 2 },
];

// Store tasks array
function saveValue() {
  const saveCollection = JSON.stringify(taskCollection);
  localStorage.setItem('taskCollection', saveCollection);
}

// Get tasks array
function getValue() {
  if (localStorage.getItem('taskCollection')) {
    taskCollection = JSON.parse(localStorage.getItem('taskCollection'));
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
        taskCollection[i].completed = true;
        saveValue();
      } else if (cbox[i].checked !== true) {
        cbox[i].parentNode.classList.remove('checked');
        taskCollection[i].completed = false;
        saveValue();
      }
    });
  }
}

export {
  checkStatus, saveValue, getValue, taskCollection,
};
