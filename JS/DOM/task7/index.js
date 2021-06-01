export const clearList = listItems => {
  const elem = document.querySelector('.categories');
  const string = (elem.innerHTML = ``);
  console.dir(string);
  return string;
};


clearList();