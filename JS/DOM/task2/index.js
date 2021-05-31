export const getTitleElement = titleElements => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

export const getInputElement = inputElements => {
  const inputElem = document.getElementsByTagName('input', type='text');
  console.dir(inputElem);
  return inputElem;
};

getTitleElement();
getInputElement();
