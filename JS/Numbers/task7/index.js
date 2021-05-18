function superRound(num, signAfterDecimal) {
    let count = 1;

    for (let i = 1; i <= signAfterDecimal; i++) {
        count *= 10;
    }

    const newArr = [
      Math.floor(num * count) / count,
      Math.round(num * count) / count,
      Math.ceil(num * count) / count,
      Math.trunc(num * count) / count,
      +num.toFixed(signAfterDecimal),
    ];

    return newArr;
}

console.log(superRound(2.55555555555555555, 6))