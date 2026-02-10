const form = document.getElementById('form');
const taskInput = document.getElementById('taskInput');
const list = document.getElementById('list');

const createTodoItem = (taskText) => {
  const listItem = document.createElement('li');
  listItem.className = 'todoitem';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const textSpan = document.createElement('span');
  textSpan.className = 'todo-text';
  textSpan.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.type = 'button';
  deleteButton.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Delete_icon_1.svg/1024px-Delete_icon_1.svg.png?20251020114837" class="trash-icon">`;


  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('completed', checkbox.checked);
  });

  deleteButton.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(textSpan);
  listItem.appendChild(deleteButton);

  return listItem;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const todoItem = createTodoItem(taskText);
  list.appendChild(todoItem);

  taskInput.value = '';
  taskInput.focus();
});
