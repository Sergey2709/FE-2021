// Возвести в квадрат все эл-ты массива. Исходный не
// менять

function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let newArr = arr.slice().map(x => x ** 2);

  return newArr;
}
