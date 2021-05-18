const cleanTransactionsList = arr => {
  const newArr = arr.map(elem => {
    const num = (+elem);
    return `$${num.toFixed(2)}`;
  });
  let sortArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '$NaN') {
      continue;
    } else {
      sortArr.push(newArr[i]);
    }
  }
  return sortArr;
};

const arr = ['    1.9', '16.4', 17, ' 1 dollar '];

console.log(cleanTransactionsList(arr));
console.log(arr);
