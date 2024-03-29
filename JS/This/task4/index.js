/* ===> 1 <=== */

const student = {
  name: 'Tom',
};

function sayName() {
  console.log(this.name);
}

const func = sayName.call(student);

const funcBruce = sayName.call({ name: 'Bruce' });

/* ===> 2 <=== */

const company = {
  companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

const funcCompany = greeting.call(company, 'Bob', 'Marley');

/* ===> 3 <=== */

const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv',
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

const funcPopulation = getPopulation.call(country, 43000);
console.log(funcPopulation);

/* ===> 4 <=== */

const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NYSE',
  printTransaction() {
    console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
  },
};

const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
  exchange: 'NASDAQ',
};

const funcTransaction = transaction.printTransaction.call(anotherTransaction);
