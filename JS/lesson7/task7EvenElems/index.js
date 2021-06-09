// Эта задача переделана - чтобы eslint не ругался добавил
// переменную newNum 
// Тест на валидаторе пройден.

function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let newNum = 0;
  return arr.map(num => {
    if (num % 2 === 0) {
      newNum = num + delta;
      return newNum;
    }
    return num;
  });
}

console.log(increaseEvenEl([1, 2, 3, 4, 5, 6, 7], 20));
