const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
const $todoInput = document.querySelector('.todo-input');
const $todoAdd = document.querySelector('.todo-add');
const $todoList = document.querySelector('.todo-list');

$todoAdd.onclick = () => {
  let prevHtml = $todoList.innerHTML;

  const content = $todoInput.value.trim();
  const { completed } = todos;

  prevHtml += `
    <li>
        <input type="checkbox" completed="${completed}" /> 
        <span>${content}</span>
        <button>Remove!</button>
    </li>
  `;
  if (content) {
    $todoList.innerHTML = prevHtml;
  }
  $todoInput.value = '';
  $todoInput.focus();
  console.log('ADD');
};
