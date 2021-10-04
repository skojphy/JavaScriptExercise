const getFirstDayOfMonth = (year, month) => {
  const day = new Date();
  day.setFullYear(year, month, 1);
  return day.getDay() % 7;
};

console.log(getFirstDayOfMonth(2021, 0));
console.log(getFirstDayOfMonth(2021, 11));
