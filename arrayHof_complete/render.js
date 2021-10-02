const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const createTodoHtml = ({ id, content, completed }) => `
<li id="${id}">
    <label>
      <input type="checkbox"${completed ? ' checked' : ''}>
      ${content}
    </label>
</li>`;

const render = todos =>
  todos.reduce((html, todo) => html + '\n' + createTodoHtml(todo), '');

console.log(render(todos));
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/
