function buildObject(keysList, valuesList) {
  const obj = {};

  keysList.forEach((element, index) => {
    obj[element] = valuesList[index];
    return obj;
  });

  return obj;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);