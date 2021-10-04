const isEqualDate = (date1, date2) => date1.toString() === date2.toString();

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // true

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/2'))); // false
