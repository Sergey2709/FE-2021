const countOccurrences = (text = '', str = '') => {
  let count = 0;

  if (str === '') {
    return null;
  }

  while (true) {
    if (text.includes(str)) {
      count += 1;
      let inn = text.indexOf(str) + str.length;
      text = text.slice(inn);
    } else {
      break;
    }
  }

  return count;
};

console.log(countOccurrences('', 'bbc'));
