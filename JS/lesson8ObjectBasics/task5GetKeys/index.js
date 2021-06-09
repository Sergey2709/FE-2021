/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const obj = {
  name: 'Tom',
  age: 17,
};

function getKeys() {
  for (const key in obj) {
    console.log(key);
  }
}

getKeys(obj);

// Тут интересная ситуация код вверху работает и еслинт не
// ругается, но не проходит валидацию, а код снизу проходит
// валидацию, но не нравится еслинту...

// function getKeys(obj) {
//   for (const key in obj) {
//     console.log(key);
//   }
// }
