const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const createListItem = (id, content, completed) => `<li id="${id}">
    <label><input type="checkbox"${
      completed ? ' checked' : ''
    }>${content}</label>
</li>`;

const render = todos =>
  todos
    .map(
      (todo, i) =>
        createListItem(todo.id, todo.content, todo.completed) +
        (i < todos.length - 1 ? '\n' : '')
    )
    .join('');

console.log(render(todos));
