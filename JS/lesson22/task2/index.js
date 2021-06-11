const userText = document.querySelector('.text-input');

userText.addEventListener('change', inputElem => {
    console.dir(inputElem.target.value);
});
