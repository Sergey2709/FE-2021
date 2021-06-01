export const setTitle = text => {
  const elem = document.querySelector('.title');
  const newTitle = (elem.textContent = text);
  console.dir(newTitle);
  return newTitle;
};

setTitle('Grom');
