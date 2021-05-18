const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr)) {
    return null; //Это проверка на немассив
  }

  const absoluteValues = arr
    .map(num => Math.abs(num));

  const max = Math.max(...absoluteValues);

  if (Math.abs(max) === Infinity) {
      return null; //Это проверка на пустой массив
  }

  return max;
};

const array = [];

console.log(getMaxAbsoluteNumber(array));