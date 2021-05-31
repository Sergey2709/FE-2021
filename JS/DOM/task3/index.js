export const getItemsList = listItems => {
  const elementsList = document.querySelectorAll('.technology');
  return elementsList;
};

export const getItemsArray = listItems => {
  const elementsList = document.querySelectorAll('.tool');
  const elementsArray = [...elementsList];
  return elementsArray;
};

// getItemsList();
// getItemsArray();