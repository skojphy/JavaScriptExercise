let todos = [];

const $newTodo = document.querySelector('.new-todo');
const $todoInput = document.querySelector('.todo-input');
const $todoAdd = document.querySelector('.todo-add');
const $todoList = document.querySelector('.todo-list');
const $destroy = document.querySelector('.destroy');
const $toggle = document.querySelector('.toggle');

const createListHtml = ({ id, content, completed }) => `
<li data-id="${id}" class="">
    <div class="view">
        <input type="checkbox" class="toggle" />
        <label>${content}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="${content}" />
</li>`;

const addTodo = (todos, newTodo) => [newTodo, ...todos];

const getMaxId = todos => Math.max(...todos.map(todo => todo.id), 0);

const render = todos =>
  todos.reduce((html, todo) => html + '\n' + createListHtml(todo), '');

const removeTodo = (todos, id) => todos.filter(todo => todo.id !== id);

$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') {
    return;
  }

  if ($newTodo.value.trim()) {
    const newTodoItem = {
      id: getMaxId(todos) + 1,
      content: $newTodo.value.trim(),
      completed: false
    };

    todos = addTodo(todos, newTodoItem);

    $todoList.innerHTML = render(todos);
  }
  $newTodo.value = '';
  console.log(todos);
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  const removeTodoId = +e.target.parentNode.parentNode.getAttribute('data-id');

  todos = removeTodo(todos, removeTodoId);
  $todoList.innerHTML = render(todos);
};
