let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const sortBy = (todos, key) => todos.sort((a, b) => a[key] - b[key]);

todos = sortBy(todos, 'id');
console.log(todos);
/*
  [
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false }
  ]
  */
console.log(sortBy(todos, 'content'));
/*
  [
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
console.log(sortBy(todos, 'completed'));
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 1, content: 'Javascript', completed: false },
    { id: 2, content: 'CSS', completed: true }
  ]
  */
