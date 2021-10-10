import * as nodes from './domNodes.mjs';
import * as functions from './stateFunctions.mjs';
import * as states from './states.mjs';

window.addEventListener('DOMContentLoaded', functions.onchangefetchTodos);

nodes.$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const content = nodes.$newTodo.value.trim();

  if (content) functions.addTodo(content);

  nodes.$newTodo.value = '';
};

nodes.$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return;

  const { id } = e.target.closest('li').dataset;

  functions.toggleTodoCompleted(id);
};

nodes.$toggleAll.onchange = () => {
  functions.toggleAllTodosCompleted(nodes.$toggleAll.checked);
};

nodes.$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;

  e.target.closest('li').classList.add('editing');
};

nodes.$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;
  functions.updateTodoContent(e.target.parentNode.dataset.id, e.target.value);
};

nodes.$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;
  functions.removeTodo(e.target.closest('li').dataset.id);
};

nodes.$filters.onclick = e => {
  if (!e.target.matches('.filters a')) return;

  [...nodes.$filters.querySelectorAll('a')].forEach($a => {
    $a.classList.toggle('selected', $a === e.target);
  });

  states.setFilter(e.target.id);
};

nodes.$clearCompleted.onclick = functions.removeAllCompletedTodos;
