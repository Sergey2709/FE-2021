const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Dom',
    age: 16,
  },
  'customer-id-4': {
    name: 'Bom',
    age: 15,
  },
};

const getCustomersList = obj => {
  let newArr = [];
  let newObj;
  const arrObjects = Object.entries(obj);
  const sortArr = arrObjects.sort((a, b) => (a.age > b.age ? 1 : -1));
  for (let i = 0; i < sortArr.length; i++) {
      newObj = { ...sortArr[i][1] };
      newObj.id = sortArr[i][0];
      newArr.push(newObj);
  }
  return newArr;
};

console.log(getCustomersList(customers));
console.log(customers);

// let users = [
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' },
//   { name: 'Ann', age: 19, surname: 'Hathaway' },
// ];

// const sortirovka = users.sort((a, b) => (a.age > b.age ? 1 : -1));
// console.log(sortirovka);
