/* eslint-disable */

function createArrayOfFunctions(num) {
  let arr = [];

  if (typeof num === 'number') {
    for (let i = 0; i < num; i += 1) {
      arr[i] = function () {
        return i;
      };
    }
  } else if (typeof num === 'undefined') {
    return arr;
  } else {
    return null;
  }
  return arr;
}

console.log(createArrayOfFunctions()[5]());
