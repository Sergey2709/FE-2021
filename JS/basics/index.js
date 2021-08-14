'use strict';

/**
 * @param {object[]} users
 * @param  {string} name
 * @return {object[]}
 */
function findUsersByName(users, name) {
  const result = users.filter(el => el.name === name);
  return result;
}

/**
 * @param {object[]} users
 * @param  {string} str
 * @return {object[]}
 */
function findUsersByString(users, str) {
  const result = users.filter(el => el.name.includes(str));
  return result;
}

// examples
const users = [
  {
    id: 101,
    name: 'Denis',
    city: 'Kyiv',
  },
  {
    id: 102,
    name: 'Alexandr',
    city: 'Lviv',
  },
  {
    id: 103,
    name: 'Nastya',
    city: 'Kyiv',
  },
  {
    id: 104,
    name: 'Violetta',
    city: 'Odesa',
  },
  {
    id: 105,
    name: 'Mykola',
    city: 'Lviv',
  },
  {
    id: 106,
    name: 'Denis',
    city: 'Lviv',
  },
  {
    id: 107,
    name: 'Andrey',
    city: 'Odesa',
  },
  {
    id: 108,
    name: 'Alexey',
    city: 'Dnipro',
  },
];

console.log(findUsersByName(users, 'Denis')); // ===> [ { id: 101, name: 'Denis', city: 'Kyiv' }, { id: 106, name: 'Denis', city: 'Lviv' } ]
console.log(findUsersByName(users, 'Andrey')); // ===> [ { id: 107, name: 'Andrey', city: 'Odesa' } ]
console.log(findUsersByName(users, 'Anna')); // ===> [ ]

console.log(findUsersByString(users, 'Al')); // ===> [ { id: 102, name: 'Alexandr', city: 'Lviv' }, { id: 108, name: 'Alexey', city: 'Dnipro' } ]
console.log(findUsersByString(users, 't')); // ===> [ { id: 103, name: 'Nastya', city: 'Kyiv' }, { id: 104, name: 'Violetta', city: 'Odesa' } ]
console.log(findUsersByString(users, 'Vik')); // ===> [ ]

console.log(findUsersByString(users, 'm')); // ===> [ ]
// explanation: letter 'm' is not included in any user name, 'Mykola' includes 'M' not 'm', so it is not added to the result
