// Ф-ция выводит кол-во неповторяющихся (уникальных)
// элементов

function uniqueCount(array) {
  return [...new Set(array)].length;
}
