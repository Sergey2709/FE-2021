const finishList = list => {
  const listElements = document.querySelector('.list');
  const items = [...document.querySelectorAll('.list li')];
  let arr = [];

  for (let i = 1; i <= 8; i++) {
    const listItemElem = document.createElement('li');
    const textElem = (listItemElem.textContent = `${i}`);
    arr.push(listItemElem);
  }

  // for (let i = 0; i <= items.length; i++) {
  //   if (arr.includes(items[i])) {
  //     continue;
  //   } else {
  //     console.log(items[i]);
  //   }
    
  // }

  // const result = [...new Set(listElements)].sort(function (a, b) {
  //   return a.innerHTML - b.innerHTML;
  // });
  // console.log(arr);
  return arr;
};

finishList();
