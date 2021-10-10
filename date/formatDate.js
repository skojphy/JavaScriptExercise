// const formatDate = date => date.toISOString().slice(0, 10);

const formatDate = dateInput => {
  const [year, month, date] = [
    dateInput.getFullYear(),
    dateInput.getMonth() + 1,
    dateInput.getDate()
  ];
  return `${year}-${month < 10 ? '0' + month : month}-${
    date < 10 ? '0' + date : date
  }`;
};

console.log(formatDate(new Date('2021/7/4')));
console.log(formatDate(new Date('2021/10/04')));
