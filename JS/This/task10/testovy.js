'use strict';

function test(a, b) {
    return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);