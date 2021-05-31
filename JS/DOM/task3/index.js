export const getItemsList = listItems => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

export const getItemsArray = listItems => {
  const elementsList = document.querySelectorAll('.tool');
  const elementsArray = [...elementsList];
  console.dir(elementsArray);
  return elementsArray;
};

getItemsList();
getItemsArray();