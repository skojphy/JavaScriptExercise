const isPalindrome = s => {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // => true
console.log(isPalindrome('race a car')); // => false
