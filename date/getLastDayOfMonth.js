const getLastDayOfMonth = (year, month) => {
  const day = new Date();
  day.setFullYear(year, month + 1, 1);
  return (day.getDay() - 1) % 7;
};

console.log(getLastDayOfMonth(2021, 0)); // 0
console.log(getLastDayOfMonth(2021, 11)); // 5
