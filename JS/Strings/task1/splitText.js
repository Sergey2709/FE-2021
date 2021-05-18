const splitText = (string, lengthString = 10) => {
    const strArr = [];
    let startPosition = 0;
    console.log(typeof(string));

    if (typeof(string) !== 'string') {
        return null;
    };

    while (true) {
        let chunk = string.substr(startPosition, lengthString);
        if (chunk.length === 0) {
            break;
        }

        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += lengthString;
    }
    return strArr.join('\n');
}

console.log(splitText('dsadgrttggfmgfjgfddfdmfjhgffjdfdfmgfgf', 5));