const toggleCase = str =>
  str.replace(/./g, char =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  );

console.log(toggleCase('StuDY'));
