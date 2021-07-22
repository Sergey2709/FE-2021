const user = {
    name: 'tom',
    age: 17,
};

const copyObj = obj => Object.assign({...obj});

console.log(copyObj(user));