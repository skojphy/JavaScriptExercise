// const formatDate = date => date.toISOString().slice(0, 10);

const formatDate = date =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

console.log(formatDate(new Date('2021/10/04')));
