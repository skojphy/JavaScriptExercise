const getLastDateOfMonth = (year, month) => {
  const day = new Date();
  day.setFullYear(year, month + 1, 1);
  const lastDay = new Date(day - 86400000);
  return lastDay.getDate();
};

console.log(getLastDateOfMonth(2021, 0));
console.log(getLastDateOfMonth(2021, 1));
