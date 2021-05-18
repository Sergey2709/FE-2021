const array = [NaN, Infinity, -Infinity, 15, 14.5, 12.4];

const getParsedIntegers = arr => {
  const newArr = arr
    .map(elem => Number.parseInt(elem));

    return newArr;
}


const getParsedIntegersV2 = arr => {
  const newArr = arr
    .map(elem => parseInt(elem));

  return newArr;
}

console.log(getParseIntegersV2(array));
console.log(array);

const getParsedFloats = arr => {
  const newArr = arr
    .map(elem => Number.parseFloat(elem));

  return newArr;
}

console.log(getParseFloats(array));
console.log(array);

const getParsedFloatsV2 = arr => {
  const newArr = arr
    .map(elem => parseFloat(elem));

  return newArr;
}
console.log(getParseFloatsV2(array));
console.log(array);