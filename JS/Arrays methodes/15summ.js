function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
}

console.log(sum([1, 2, 3, 4, 5]));
