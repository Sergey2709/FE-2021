export const getItemsList = listItems => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
};

export const getItemsArray = listItems => {
  const elementsList = document.querySelectorAll('.tool');
  const elementsArray = Array.from(elementsList);
  console.dir(elementsArray);
};

getItemsList();
getItemsArray();