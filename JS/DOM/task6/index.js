const setButton = buttonText => {
  const elem = document.querySelector('body');
  const text = (elem.innerHTML = `<button>${buttonText}</button>`);
  const newText = (elem.textContent = `<button>${buttonText}</button>`);
//   console.dir(text, newText);
  return text, newText;
};

setButton('Privet');
