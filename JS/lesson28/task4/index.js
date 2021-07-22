const add3 = value => value + 3;
const mult2 = value => value * 2;
const div4 = value => value / 4;

const compose = (...functions) => value => functions.reduce((acc, func) => func(acc), value);

const doSomthing = compose(
    add3,
    mult2,
    div4,
);

console.log(doSomthing(5));