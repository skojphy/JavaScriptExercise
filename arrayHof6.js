let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

const toggleCompletedById = (todos, id) =>
  todos.map(item => {
    if (item[id] === id) {
      item.completed = !item.completed;
    }
    return item;
  });

todos = toggleCompletedById(todos, 2);
console.log(todos);
/*
  [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
