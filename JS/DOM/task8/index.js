const createButton = buttonText => {
  const elem = document.querySelector('body');
  const buttonElem = document.createElement(`button`);
  const newButton = (buttonElem.textContent = buttonText);
  elem.append(buttonElem);
  console.dir(buttonElem);
  return buttonElem;
};

createButton('darova');
