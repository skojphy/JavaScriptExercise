let todos = [];

const $newTodo = document.querySelector('.new-todo');
const $todoInput = document.querySelector('.todo-input');
const $todoAdd = document.querySelector('.todo-add');
const $todoList = document.querySelector('.todo-list');
const $destroy = document.querySelector('.destroy');
const $toggle = document.querySelector('.toggle');
const $todoCount = document.querySelector('.todo-count');
const $clearCompleted = document.querySelector('.clear-completed');
const $view = document.querySelector('.view');
const $edit = document.querySelector('.edit');
const $toggleAll = document.querySelector('.toggle-all');
const $all = document.getElementById('all');
const $active = document.getElementById('active');
const $completed = document.getElementById('completed');

const createListHtml = ({ id, content, completed }) => `
<li data-id="${id}">
    <div class="view">
        <input type="checkbox" class="toggle" ${completed ? 'checked' : ''}/>
        <label>${content}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="${content}" />
</li>`;

const addTodo = (todos, newTodo) => [newTodo, ...todos];

const getMaxId = todos => Math.max(...todos.map(todo => todo.id), 0);

const render = todos =>
  todos.reduce((html, todo) => html + '\n' + createListHtml(todo), '');

const setTodos = todos => {
  const todoCount = todos.length;

  $todoList.innerHTML = render(todos);
  $todoCount.innerHTML = `${todoCount} ${
    todoCount > 1 ? 'items' : 'item'
  } left`;
  $clearCompleted.style.display = todos.length ? 'block' : 'none';
};

const removeTodo = (todos, id) => todos.filter(todo => todo.id !== id);

const toggleCompletedById = (todos, id) =>
  todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
  );

const countCompletedTodos = todos =>
  todos.filter(todo => todo.completed).length;

const clearCompleted = todos => todos.filter(todo => !todo.completed);

const toggleCompletedAll = todos =>
  todos.map(todo => ({
    ...todo,
    completed: !(countCompletedTodos(todos) === todos.length)
  }));

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

    setTodos(todos);
  }
  $newTodo.value = '';
};

$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  const removeTodoId = +e.target.parentNode.parentNode.getAttribute('data-id');

  todos = removeTodo(todos, removeTodoId);
  setTodos(todos);
};

$todoList.ondblclick = e => {
  if (e.target.nodeName !== 'LABEL') return;

  e.target.parentNode.parentNode.classList.add('editing');
};

$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;
  const newContent = e.target.value.trim();

  setTodos(todos);
};

$todoList.onchange = e => {
  const checkedTodoId = +e.target.parentNode.parentNode.getAttribute('data-id');
  todos = toggleCompletedById(todos, checkedTodoId);
};

$toggleAll.onchange = () => {
  todos = toggleCompletedAll(todos);
  setTodos(todos);
};

$all.onclick = e => {
  // e.target.classList.add('selected');

  [...document.querySelectorAll('.filters a')].forEach(filter => {
    filter === e.target
      ? e.target.classList.add('selected')
      : e.target.classList.remove('selected');
  });

  setTodos(todos);
};

$active.onclick = e => {
  // e.target.classList.add('selected');

  console.log([...document.querySelectorAll('.filters a')]);

  [...document.querySelectorAll('.filters a')].forEach(filter => {
    filter === e.target
      ? e.target.classList.add('selected')
      : e.target.classList.remove('selected');
  });

  setTodos(todos.filter(todo => !todo.completed));
};

$completed.onclick = e => {
  // e.target.classList.add('selected');

  [...document.querySelectorAll('.filters a')].forEach(filter => {
    filter === e.target
      ? e.target.classList.add('selected')
      : e.target.classList.remove('selected');
  });

  setTodos(todos.filter(todo => todo.completed));
};

setTodos(todos);
