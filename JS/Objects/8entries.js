const ADULT = 18;

const users = {
  Tom: 17,
  John: 19,
  Bob: 18,
};

const getAdults = obj =>
  Object.entries(obj)
    .filter(user => user[1] >= ADULT)
    .map(user => user[0]);

console.log(getAdults(users));
