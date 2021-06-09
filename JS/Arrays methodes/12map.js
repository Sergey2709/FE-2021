function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map(num => {
    if (num % 2 === 0) {
      return (num += delta);
    }
    return num;
  });
}

console.log(increaseEvenEl([1, 2, 3, 4, 5, 6, 7], 20));
