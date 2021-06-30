const MAX = 1000;
const MIN = 1;

const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const getIdForTasks = () => {
  tasks.forEach(element => {
    element.id = Math.random() * (MAX - MIN) + MIN;
  });
};

const renderTasks = tasksList => {
  getIdForTasks();
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.setAttribute('id', `${id}`);
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};

// Этот блок кода чекает и меняет класс эл-та и его положение в списке.

const getCheckedElem = event => {
  const checkedElem = event.target.closest('.list__item');
  const idCheckedElem = checkedElem.id;

  tasks.filter(elem => {
    if (elem.done === false) {
      if (elem.id === +idCheckedElem && elem.done === false) {
        elem.done = true;
      }
      return elem;
    }

    if (elem.id === +idCheckedElem) {
      elem.done = false;
    }
    return elem;
  });

  listElem.innerHTML = '';
  getIdForTasks();
  renderTasks(tasks);
};

const createNewTask = event => {
  const inputField = document.querySelector('.task-input');

  if (!inputField.value) {
    return;
  }

  const newTask = {
    text: `${inputField.value}`,
    done: false,
  };
  tasks.push(newTask);
  inputField.value = '';
  listElem.innerHTML = '';
  getIdForTasks();
  renderTasks(tasks);
};

listElem.addEventListener('click', getCheckedElem);

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', createNewTask);

renderTasks(tasks);
