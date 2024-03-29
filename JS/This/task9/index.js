'use strict';

function sumOfSquares() {
    return [...arguments].reduce((acc, elem) => {
        return acc + elem * elem;
    }, 0);
};

console.log(sumOfSquares(1, 2, 3, 6));