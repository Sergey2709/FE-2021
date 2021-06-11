const userText = document.querySelector('.text-input');

userText.addEventListener('change', event => {
  console.log(event.target.value);
});
