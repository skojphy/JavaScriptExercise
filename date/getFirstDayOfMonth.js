const getFirstDayOfMonth = (year, month) =>
  new Date(year, month, 1).getDay() % 7;

console.log(getFirstDayOfMonth(2021, 0));
console.log(getFirstDayOfMonth(2021, 11));
