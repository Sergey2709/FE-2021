const employers = [
  'Alex',
  '',
  'ludmila',
  'Viktor',
  '',
  'oleg',
  'iNna',
  'Ivan',
  'Alex',
  'Olga',
  ' Ann',
];

const employersNames = employers
    .filter(elem => elem)
    .map(elem => elem.toLowerCase().trim());

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
};

function calcCash(own = 0) {
  const total = sponsors.cash.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);

  return total;
}

const money = calcCash(null, sponsors.cash);

function makeBusiness(owner, director = 'Victor', cash, emp) {
  const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
  console.log(
    `We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${employersNames}`,
  );
  console.log(`And we have a sponsors: ${sumSponsors}`);
  console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', , money, employersNames]);
