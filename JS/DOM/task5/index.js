export const getTitle = text => {
  const elem = document.querySelector('.title');
  const newTitle = (elem.textContent = text);
  console.dir(newTitle);
  return newTitle;
};

getTitle('Grom');
