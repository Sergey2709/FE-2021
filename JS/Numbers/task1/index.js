const array = [NaN, Infinity, -Infinity, 15, 14.5, 12.4];

// function getFiniteNumbers(arr) {
//   let newArr = [];

//   arr.forEach(element => {
//     if (Number.isFinite(element)) {
//         newArr.push(element);
//     }
//   });
//   return newArr;
// }

// console.log(getFiniteNumbers(array));
// console.log(array);

// const getFiniteNumbersV2 = arr => {
//   let newArr = [];

//   arr.forEach(element => {
//     if (isFinite(element)) {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// };

// console.log(getFiniteNumbersV2(array));
// console.log(array);

// const getNaN = arr => {
//   let newArr = [];
//   arr.forEach(element => {
//       if(Number.isNaN(element)) {
//           newArr.push(element);
//       }
//       });
//   return newArr;
// };

// console.log(getNaN(array));

// const getNaNV2 = arr => {
//   let newArr = [];
//   arr.forEach(element => {
//     if (isNaN(element)) {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// };

// console.log(getNaNV2(array));

const getIntegers = arr => {
  let newArr = [];

  arr.forEach(element => {
    if (Number.isInteger(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

console.log(getIntegers(array));

// let finita = finite === finite2;
// let nans = nan === nan2;
