export const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const absArr = arr.map(num => Math.abs(num));
  const mini = Math.min(...absArr);

  if (mini === Infinity) {
    return null;
  }
  
  return mini * mini;
};

console.log(getMinSquaredNumber([]));
