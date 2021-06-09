// В строке 3 ушел от магических чисел...
// Валидатор пройден

const MAXLENGTH = 5;

function filterNames(arr, text) {
  return arr.filter(item => item.includes(text) && item.length > MAXLENGTH);
}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Vanya', 'Nastya'], 'ya'));
