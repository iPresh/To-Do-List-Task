const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodoList() {
  // clear todo list
  todoList.innerHTML = '';

  // render each todo item
  for (let i = todos.length - 1; i >= 0; i--) {
    const todo = todos[i];

    const todoItem = document.createElement('li');
    todoItem.textContent = todo;
    todoList.appendChild(todoItem);

    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.textContent = 'x';
    todoDeleteBtn.addEventListener('click', () => {
      todos.splice(i, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      renderTodoList();
    });
    todoItem.appendChild(todoDeleteBtn);
  }
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const todoText = todoInput.value.trim();

  if (todoText === '') {
    return;
  }

  todos.push(todoText);
  localStorage.setItem('todos', JSON.stringify(todos));
  todoInput.value = '';
  renderTodoList();
});

renderTodoList();
