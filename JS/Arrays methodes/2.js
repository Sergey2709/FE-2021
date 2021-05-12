// ф-ция суммирует макс и минимальное значение
// в массиве и возвращает тру, если сумма больше 1000.

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return Math.min(...arr) + Math.max(...arr) > 1000;
}
