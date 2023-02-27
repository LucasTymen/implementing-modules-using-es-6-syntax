/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
  if (domElement.style.display === 'none') {
    domElement.style.display = 'block';
  } else {
    domElement.style.display = 'none';
  }
}

import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

const changeToFunkyColor = (domElement) => {
const r = Math.random() * 255;
const g = Math.random() * 255;
const b = Math.random() * 255;

domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

export { toggleHiddenElement, changeToFunkyColor };
