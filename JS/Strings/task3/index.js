const splitString = (string, lengthString = 10) => {
  const strArr = [];
  let startPosition = 0;

  if (typeof string !== 'string') {
    return null;
  }

  while (true) {
    const chunk = string.substr(startPosition, lengthString);

    if (chunk.length < lengthString) {
      const count = lengthString - chunk.length;
      strArr.push(chunk.slice() + '.'.repeat(count));
      break;
    }

    strArr.push(chunk.slice(0));
    startPosition += lengthString;
  }
  return strArr;
};

console.log(splitString('dsadgrttggfmgfjgfddfdmfjhgffjdfdfmgfgf', 5));
console.log(splitString(50, 5));
