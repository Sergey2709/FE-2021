function compareObjects(obj1, obj2) {
  const arr1 = Object.entries(obj1);
  const arr2 = Object.entries(obj2);
    
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    // const array1 = arr1[0].concat(arr1[1]);
    // const array2 = arr2[0].concat(arr2[1]);
    // return (array1.equals(array2));
    diff(arr1, arr2);
    function diff(arr1, arr2) {
      return arr1.filter(i => !arr2.includes(i))
      .concat(arr2.filter(i => !arr1.includes(i)));
    };


  }
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
