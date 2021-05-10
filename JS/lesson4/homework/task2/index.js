function compareSums(a, b, c, d) {
  return sum(a, b) > sum(c, d);
}

function sum(from, to) {
  let result = 0;
  for (let i = from; i <= to; i++) {
    result += i;
  }
  return result;
}

console.log(compareSums(1, 10, 1, 7));
