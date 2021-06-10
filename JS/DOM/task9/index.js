const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const finishList = list => {
  const listElements = document.querySelector('.list');
  let items = [...document.querySelectorAll('.list li')];

  const newItem = items.map(el => el.innerHTML);

  const newArr = listNumbers.map((el) => {
    const newLi = document.createElement(`li`);
    newLi.textContent = el;

    if (!newItem.includes(`${el}`)) {
      listElements.append(newLi);
    }
    return newLi;
  });

  items = [...document.querySelectorAll('.list li')].sort((a, b) => a.innerHTML - b.innerHTML);

  listElements.innerHTML = '';

  items.forEach(element => {
    listElements.append(element);
  });
  return listElements;
};

console.log(finishList());
