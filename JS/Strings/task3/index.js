const splitString = (string, lengthString = 10) => {
  const strArr = [];
  let startPosition = 0;
  console.log(typeof string);

  if (typeof string !== 'string') {
    return null;
  }

  while (true) {
    let chunk = string.substr(startPosition, lengthString);

    if (chunk.length < lengthString) {
      let count = lengthString - chunk.length;
      strArr.push(chunk.slice() + '.'.repeat(count));
      break;
    }

    strArr.push(chunk.slice(0));
    startPosition += lengthString;
  }
  return strArr;
};

console.log(splitString('dsadgrttggfmgfjgfddfdmfjhgffjdfdfmgfgf', 5));
