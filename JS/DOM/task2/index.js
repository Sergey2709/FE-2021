const getTitleElement = titleElements => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

const getInputElement = inputElements => {
  const inputElem = document.querySelector('input', 'text');
  console.dir(inputElem);
  return inputElem;
};

getTitleElement();
getInputElement();
