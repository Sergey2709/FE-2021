const baseUrl = 'https://610a7d7e52d56400176afdf4.mockapi.io/form';

const buttonElem = document.querySelector('.submit-button');
const inputElem = document.querySelector('.login-form');
const errorElem = document.querySelector('.error-text');

const validityInput = () => {
  if (inputElem.reportValidity()) {
    return buttonElem.disabled = false;
  } else {
    return buttonElem.disabled = true;
  }
  
};

inputElem.addEventListener('input', validityInput);

const onSubmitForm = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(inputElem));

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(response => {
      alert(JSON.stringify(response));
      inputElem.reset();
    })
    .catch(() => {
      errorElem.textContent = 'Failed to create user';
    });
};

inputElem.addEventListener('submit', onSubmitForm);
