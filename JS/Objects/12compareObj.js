// Использовал энтриз для превращение объекта в массив массивов, далее
// сравнил подмассивы с помощью JOIN

function compareObjects(obj1, obj2) {
  const arr1 = Object.entries(obj1);
  const arr2 = Object.entries(obj2);

  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1[0].join() === arr2[0].join() && arr1[1].join() == arr2[1].join();
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
