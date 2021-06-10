const getSection = num => {
  const elem = document.querySelector(`span[data-number="${num}"]`);
  
  return elem.parentElement.getAttribute('data-section');
};

console.log(getSection(5));
