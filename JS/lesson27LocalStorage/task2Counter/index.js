const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter_button');

  if (!isButton) {
    return;
  }

  const action = e.target.dataset.action;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueElem.textContent = newValue;
};

const onStorageChange = e => {
  console.log(e);
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
    counterValueElem.textContent = localStorage.getItem('counterValue')
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);