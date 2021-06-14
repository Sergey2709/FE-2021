const userCheckbox = document.querySelector('.task-status');

userCheckbox.addEventListener('change', checkboxElem => {
  console.log(checkboxElem.target.checked);
});
