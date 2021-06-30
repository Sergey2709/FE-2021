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

// const getCustomersList = obj => {
//   // const newArr = [];
//   let newObj;
//   const arrObjects = Object.entries(obj);
//   // console.log(arrObjects);
//   const sortArr = arrObjects.sort((a, b) => (a.age > b.age ? 1 : -1));

//   const newArr = sortArr.map(element => {
//     // console.log(element);
//     newObj = { ...element[1] };
//     newObj.id = element[0];
//     return newObj;
//   });

//   // for (let i = 0; i < sortArr.length; i+=1) {
//   //     newObj = { ...sortArr[i][1] };
//   //     newObj.id = sortArr[i][0];
//   //     newArr.push(newObj);
//   // }

//   return newArr;
// };

const getCustomersList = obj => {
  const arrObjects = Object.entries(obj);
  const sortArr = arrObjects.sort((a, b) => (a.age > b.age ? 1 : -1));

  const newArr = sortArr.map(element => {
    const newObj = { ...element[1] };
    newObj.id = element[0];
    return newObj;
  });

  return newArr;
};

console.log(getCustomersList(customers));
console.log(customers);

// getCustomersList(customers);

// let users = [
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' },
//   { name: 'Ann', age: 19, surname: 'Hathaway' },
// ];

// const sortirovka = users.sort((a, b) => (a.age > b.age ? 1 : -1));
// console.log(sortirovka);
