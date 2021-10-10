import * as states from './states.mjs';

const fetchTodos = () => {
  states.setTodos([
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ]);
};

const getMaxTodoId = () =>
  Math.max(0, ...states.todoStates.todos.map(todo => todo.id)) + 1;

const addTodo = content => {
  states.setTodos([
    { id: getMaxTodoId(), content, completds: false },
    ...states.todoStates.todos
  ]);
};

const toggleTodoCompleted = id => {
  states.setTodos(
    states.todoStates.todos.map(todo =>
      todo.id === +id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const toggleAllTodosCompleted = completed => {
  states.setTodos(
    states.todoStates.todos.map(todo => ({ ...todo, completed }))
  );
};

const updateTodoContent = (id, content) => {
  states.setTodos(
    states.todoStates.todos.map(todo =>
      todo.id === +id ? { ...todo, content } : todo
    )
  );
};

const removeTodo = id => {
  states.setTodos(states.todoStates.todos.filter(todo => todo.id !== +id));
};

const removeAllCompletedTodos = () => {
  states.setTodos(states.todoStates.todos.filter(todo => !todo.completed));
};

export {
  fetchTodos,
  getMaxTodoId,
  addTodo,
  toggleTodoCompleted,
  toggleAllTodosCompleted,
  updateTodoContent,
  removeTodo,
  removeAllCompletedTodos
};
