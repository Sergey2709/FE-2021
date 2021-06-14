const button = document.querySelector('.search__btn');

button.addEventListener('click', () => {
  console.log(button.previousSibling.previousElementSibling.value);
});
