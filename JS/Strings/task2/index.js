const sortContacts = (arr, sortAds = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  if (!sortAds) {
    return arr.sort((a, b) => b.name.localeCompare(a.name));
  }

  return arr.sort((a, b) => a.name.localeCompare(b.name));
};

const contacts = [
  { name: 'Vasya', age: 28 },
  { name: 'Petya', age: 35 },
];

console.log(sortContacts(contacts, true));
