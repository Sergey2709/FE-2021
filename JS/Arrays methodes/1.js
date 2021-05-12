// ф-ция принимает массив и возвращает зеркальный

function reverseArray(arr) {
  let newArr = [];

  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i of arr) {
    newArr.unshift(i);
  }
  return newArr;
}
