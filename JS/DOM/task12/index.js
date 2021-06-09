const squaredNumbers = list => {
  const listElem = [...document.querySelectorAll('.number')];

  const newList = listElem.map(el => {
    const newEl = el.dataset.number * el.dataset.number;
    el.setAttribute('data-squared-number', `${newEl}`);
    el.removeAttribute('class');
    el.setAttribute('class', 'number');
    return el;
  });

  return listElem;
};

squaredNumbers();
