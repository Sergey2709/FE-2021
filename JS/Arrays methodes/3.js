// Ф-ции сортируют массив по возрастанию и по убыванию

function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.sort(function (a, b) {
    return a - b;
  });
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.sort(function (a, b) {
    return b - a;
  });
}