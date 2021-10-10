const getLastDateOfMonth = (year, month) => {
  const firstDayOfNextMonth = new Date(year, month + 1, 1);
  const lastDay = new Date(firstDayOfNextMonth - 86400000);
  return lastDay.getDate();
};

console.log(getLastDateOfMonth(2021, 0));
console.log(getLastDateOfMonth(2021, 1));
