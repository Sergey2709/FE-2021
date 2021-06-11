const button = document.querySelector('.search__btn');
const text = document.querySelector('.search__input');

text.addEventListener('change', inputElem => {
  button.addEventListener('click', () => {
    console.log(inputElem.target.value);
  });
});
