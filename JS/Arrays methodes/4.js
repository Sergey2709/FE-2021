// Ф-ция удаляет повторяющиеся элементы (дубликаты)

function removeDuplicates(array) {
  return [...new Set(array)];
}
