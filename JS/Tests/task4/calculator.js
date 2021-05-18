export const calc = expression => {
if (typeof expression === 'string') {
    const [a, operator, b] = expression.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }
  return `${expression} = ${result}`;

} else {
    return null;
}
  
};

// console.log(calc(1 + 3));
