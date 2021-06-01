export const getTitle = listItems => {
  const elem = document.querySelector('.title');
  const text = elem.textContent;
  console.dir(text);
  return text;
};

export const getDescription = listItems => {
  const elem = document.querySelector('.about');
  const text = elem.innerText;
  console.dir(text);
  return text;
};

export const getPlans = listItems => {
  const elem = document.querySelector('.plans');
  const text = elem.innerHTML;
  console.dir(text);
  return text;
};

export const getGoal = listItems => {
  const elem = document.querySelector('.goal');
  const text = elem.outerHTML;
  console.dir(text);
  return text;
};

// getTitle();
// getDescription();
// getPlans();
// getGoal();
