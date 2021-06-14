const button = document.querySelector('.single-use-btn');

const eventClick = () => {
  console.log('clicked');
  button.removeEventListener('click', eventClick);
};

button.addEventListener('click', eventClick);

// button.removeEventListener('click', eventClick);
