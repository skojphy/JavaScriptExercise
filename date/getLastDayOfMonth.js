const getLastDayOfMonth = (year, month) => {
  const firstDayOfNextMonth = new Date(year, month + 1, 1);
  return (firstDayOfNextMonth.getDay() + 6) % 7;
};

console.log(getLastDayOfMonth(2021, 0)); // 0
console.log(getLastDayOfMonth(2021, 11)); // 5
