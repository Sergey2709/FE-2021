function filterNames(arr, text) {
  return arr.filter(item => item.includes(text) && item.length > 5);
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Vanya', 'Nastya'], 'ya'));