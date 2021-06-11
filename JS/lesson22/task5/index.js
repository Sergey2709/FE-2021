const button = document.querySelector('.single-use-btn');

button.addEventListener(
  'click',
  () => {
    console.log('clicked');
  },
  { once: true },
);
