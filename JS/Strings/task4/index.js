const countOccurrences = (text = '', str = '') => {
  let count = 0;

  if (!str) {
    return null;
  }

  while (true) {
    if (!text.includes(str)) {
      break;
    }

    count += 1;
    const entries = text.indexOf(str) + str.length;
    text = text.slice(entries);
  }

  return count;
};

console.log(countOccurrences('bbcbbcbbbbbbc', 'bbc'));
console.log(countOccurrences('bbcbbbbbbbbc', 'b'));
