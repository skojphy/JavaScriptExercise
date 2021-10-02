let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const removeTodo = (todos, id) => todos.filter(item => item.id !== id);

todos = removeTodo(todos, 2);
console.log(todos);
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
