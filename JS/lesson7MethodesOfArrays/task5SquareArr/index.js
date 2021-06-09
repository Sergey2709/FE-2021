function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().map(x => x ** 2);
}
