/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

let foo = 1;

function bar() {
  if (!foo) {
    foo = 10;
  }
  console.log(foo);
  return foo;
}

foo = bar();

console.log(foo);
