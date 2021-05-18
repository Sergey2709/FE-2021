export const getAdults = obj => {
  let newObj = {};

  if (typeof obj !== 'object') {
    return null;
  }
    for (let key in obj) {
      if (obj[key] >= 18) {
        newObj[key] = obj[key];
      }
    }

    return newObj;
  
};

