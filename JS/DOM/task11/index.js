const manageClasses = list => {
  const listElements = document.querySelector('.list');

  const oneElement = document.querySelector('.one');
  oneElement.classList.add('selected');
  console.dir(oneElement);

  const twoElement = document.querySelector('.two');
  twoElement.classList.toggle('selected');
  console.dir(twoElement);

  const threeElement = document.querySelector('.three');
  threeElement.classList.toggle('three_done');
  console.dir(threeElement);

  const fourElement = document.querySelector('.some-class');
  fourElement.classList.add('another-class');
  console.dir(fourElement);

  return listElements.append(oneElement, twoElement, threeElement, fourElement);
}

manageClasses();