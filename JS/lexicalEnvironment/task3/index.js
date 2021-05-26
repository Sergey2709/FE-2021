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

console.log(add(15));
console.log(decrease(5));
console.log(reset());
console.log(add(15));
console.log(add(15));
console.log(add(15));
console.log(getMemo());
console.log(decrease(3));
console.log(reset());
console.log(getMemo());
