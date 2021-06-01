const setButton = buttonText => {
  const elem = document.querySelector('body');
  const text = (elem.innerHTML = `<button>${buttonText}</button>`);
  console.dir(text);
  return text;
};

setButton('Privet');
