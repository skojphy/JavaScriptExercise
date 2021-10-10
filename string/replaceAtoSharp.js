// const replaceAtoSharp = str => str.replace('/[A]/g', '#');
const replaceAtoSharp = str => str.replaceAll('A', '#');

console.log(replaceAtoSharp('BANANA'));
