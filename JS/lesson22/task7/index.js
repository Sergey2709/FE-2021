const button = document.querySelector('button');
const button2 = document.querySelector('.btn').nextElementSibling;


const handleClick = (event) => {
  console.log(event.target.textContent);
};

button.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick);