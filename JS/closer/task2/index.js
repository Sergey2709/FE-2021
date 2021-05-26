function createCalculstor() {
  let memory = 0;
  let memoryNum = 0;
  function add(num) {
    memoryNum += num;
    return memoryNum;
  }

  function decrease(num) {
    memoryNum -= num;
    return memoryNum;
  }

  function reset() {
    memoryNum = memory;
    return memoryNum;
  }

  function getMemo() {
    return memoryNum;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

const calculator1 = createCalculstor();
const calculator2 = createCalculstor();

console.log(calculator1.add(15));
console.log(calculator1.decrease(5));
console.log(calculator1.reset());
console.log(calculator1.add(15));
console.log(calculator1.add(15));
console.log(calculator2.add(15));
console.log(calculator2.getMemo());
console.log(calculator2.decrease(3));
console.log(calculator1.reset());
console.log(calculator1.getMemo());
