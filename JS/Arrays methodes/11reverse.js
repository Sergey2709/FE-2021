// Перевернуть массив, исходный не менять, если вошел
// не массив вывести налл.

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice().reverse();
}
