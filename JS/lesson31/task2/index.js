const asyncCalculator = numbr =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve =>
          setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500),
        ),
    )
    .then(value => {
      const result = value * 2;
      console.log(`Doubled value: ${result}`);
      return result;
    });

asyncCalculator(5);
// const asyncCalculator = numbr =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(`Initial value: ${numbr}`);
//       resolve(numbr);
//     }, 500);
//   });

// const prom = asyncCalculator(5);

// prom
//   .then(value => {
//     setTimeout(() => {
//       const result = value * value;
//       console.log(`Squared value: ${result}`, value);
//       return result;
//     }, 500);
//   })
//   .then(value => {
//     setTimeout(() => {
//       const result = value * 2;
//       console.log(`Doubled value: ${result}`);
//       return result
//     }, 500);
//   });
