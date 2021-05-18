const sortContacts = (arr, sortAds = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  let result;

  if (sortAds === true) {
    result = arr.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else {
    result = arr.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
  return result;
};

const contacts = [
    {name: 'Vasya', age: 28},
    {name: 'Petya', age: 35},
];

console.log(sortContacts(contacts, true));