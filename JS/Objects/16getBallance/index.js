const getTotalRevenue = transactions => {
  let result = 0;
  dayTransactions.forEach(obj => result += obj.amount);
  console.log(result);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
