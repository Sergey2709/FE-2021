const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }, { name: 'Anna' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = obj => {
  const resultArr = [];
  Object.values(obj)
    .flat()
    .forEach(obj  => resultArr.push(obj.name));
  return resultArr;
};

console.log(getPeople(rooms));
