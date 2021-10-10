import * as nodes from './domNodes.mjs';

const todoStates = {
  todos: [],
  currentFilter: 'all'
};

const render = () => {
  const _todos = todoStates.todos.filter(todo =>
    todoStates.currentFilter === 'completed'
      ? todo.completed
      : todoStates.currentFilter === 'active'
      ? !todo.completed
      : true
  );

  nodes.$todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) => `
        <li data-id="${id}">
          <div class="view">
            <input type="checkbox" class="toggle" ${
              completed ? 'checked' : ''
            } />
            <label>${content}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${content}" />
        </li>`
    )
    .join('');

  [nodes.$main, nodes.$footer].forEach($el =>
    $el.classList.toggle('hidden', !todoStates.todos.length)
  );

  const activeTodos = todoStates.todos.filter(todo => !todo.completed);

  nodes.$todoCount.textContent = `${activeTodos.length} ${
    activeTodos.length > 1 ? 'items' : 'item'
  } left`;

  const completedTodos = todoStates.todos.filter(todo => todo.completed);

  nodes.$clearCompleted.classList.toggle('hidden', completedTodos.length === 0);
};

const setTodos = newTodos => {
  todoStates.todos = newTodos;
  render();
};

const setFilter = newFilter => {
  todoStates.currentFilter = newFilter;
  render();
};

export { todoStates, setTodos, setFilter };
