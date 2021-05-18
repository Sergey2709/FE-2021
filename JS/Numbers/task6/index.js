// Вывести массив указанной длины от и до указанных значений в 
// виде целых чисел, если в промежутке нет целых, то вывести НАЛЛ 



const getRandomNumbers = (length, from, to) => {
  let newArr = [];
  if (to - from > 1) {
    for (let i = 0; i < length; i++) {
      let randomNum = Math.round(Math.random() * (to - from) + from);
      newArr.push(randomNum);
    }
  } else {
    return null;
  }

  return newArr;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
