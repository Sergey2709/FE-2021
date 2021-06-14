const button = document.querySelector('.pagination__page');
const button2 = button.nextElementSibling;
const button3 = button2.nextElementSibling;

const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

button.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick);
button3.addEventListener('click', handleClick);