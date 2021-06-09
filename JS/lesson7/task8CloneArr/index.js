// выполнил условие по спред оператору в 7 строке :)
// валидатор пройден

function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [...arr]; 
}

console.log(cloneArr([1, 2, 3, 4, 5]));
