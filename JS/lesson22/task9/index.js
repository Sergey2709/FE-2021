const userCheckbox = document.querySelector('.task-status');

userCheckbox.addEventListener('change', event => {
  console.log(event.target.checked);
});
