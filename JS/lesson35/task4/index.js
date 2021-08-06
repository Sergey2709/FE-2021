const parseUser = str => {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
};

console.log(parseUser('{"name": "Tom"}'));
console.log(parseUser({ name: 'Tom' }));
