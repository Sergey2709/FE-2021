const users = {
  Tom: 17,
  John: 19,
  Bob: 18,
};

const getKeys = obj => {
  const arrKeys = Object.keys(obj);
  arrKeys.forEach(num => console.log(num));
};

getKeys(users);