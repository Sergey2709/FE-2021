'use strict';

function saveCalls(func) {
  let calls = [];

  return function withMemory(args) {
    calls.push([...arguments]);
    withMemory.calls = calls;
    return func.apply(this);
  };
}

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);

console.log(testWithMemory.calls);

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);
console.log(methodWithMemory.apply({ name: 'Tom' }));
console.log(methodWithMemory.calls);
