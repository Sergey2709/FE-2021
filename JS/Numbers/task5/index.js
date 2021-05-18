const getTotalPrice = arr => {
  let summ = 0;

  arr.forEach(num => (summ += num * 100));

  return '$' + Math.floor(summ) / 100;
};

const array = [15.233333, 53.003, 12, 15];

console.log(getTotalPrice(array));
