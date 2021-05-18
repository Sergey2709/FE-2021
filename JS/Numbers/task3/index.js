const multiRound = num => {

    const newArr = [
      Math.floor(num * 100) / 100,
      Math.round(num * 100) / 100,
      Math.ceil(num * 100) / 100,
      Math.trunc(num * 100) / 100,
      +num.toFixed(2),
    ];

  return newArr;
};
