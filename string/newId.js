const newId = id => {
  const newId = id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  const len = newId.length;
  return len > 2 ? newId : newId + newId.charAt(len - 1).repeat(3 - len);
};

console.log(newId('...!@BaT#*..y.abcdefghijklm'));
