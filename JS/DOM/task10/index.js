// const finishForm = form => {
//   const formElem = document.querySelector('.login-form');
//   const chengeInput = document.querySelector('input');
//   const finishList = form => {
//       const inputElem = document.createElement('input');
//       inputElem.setAttribute('name', 'login');
//       return formElem.append(inputElem);
//   }

//   finishList();
//   chengeInput.setAttribute('type', 'password');

//   formElem.append(chengeInput);

//   return formElem;
// };

// const finishForm = form => {
//   const formElem = document.querySelector('.login-form');
//   const chengeInput = document.querySelector('input');

//   chengeInput.setAttribute('type', 'password');

//   formElem.append(chengeInput);

//   return formElem;
// };

// const finishList = form => {
//   const formElem = document.querySelector('.login-form');
//   const inputElem = document.createElement('input');
//   inputElem.setAttribute('name', 'login');
//   return formElem.append(inputElem);
// };

// finishList();

// finishForm();


const finishForm = form => {
  const formElem = document.querySelector('.login-form');
  const chengeInput = document.querySelector('input');
  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text')
  inputElem.setAttribute('name', 'login');
  chengeInput.setAttribute('type', 'password');
  formElem.append(inputElem, chengeInput);


  return formElem;
};

finishForm();


""