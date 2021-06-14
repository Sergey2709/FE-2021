const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearListElems = document.querySelector('.events-list');
clearListElems.innerHTML = '';



const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};



// const buttonAttachHandlers = document.querySelector('.attach-handlers-btn');
// buttonAttachHandlers.addEventListener('click', logTarget);

// const buttonRemoveHandlers = document.querySelector('.remove-handlers-btn');
// buttonRemoveHandlers.removeEventListener('click', logTarget);

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');




divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

const buttonClear = document.querySelector('.clear-btn');

buttonClear.addEventListener('click', () => {
  clearListElems.innerHTML = '';
});
