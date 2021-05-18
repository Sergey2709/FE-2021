// Перевернуть массив, исходный не менять, если вошел
// не массив вывести налл.

export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice().reverse();
}

console.log(reverseArray([]));