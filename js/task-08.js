const inputEl = document.querySelector('#controls > input');
const renderBtnEl = document.querySelector('button[data-action="render"]');
const destroyBtnEl = document.querySelector('button[data-action="destroy"]');
const baseBox = document.getElementById('boxes');

const createBoxes = amount => {
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const boxElement = document.createElement('div');
    boxElement.style.backgroundColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    boxElement.style.width = 30 + i * 10 + 'px';
    boxElement.style.height = 30 + i * 10 + 'px';
    elements.push(boxElement);
  }
  baseBox.append(...elements);
};

renderBtnEl.addEventListener('click', () => createBoxes(inputEl.value));
destroyBtnEl.addEventListener('click', () => (baseBox.innerHTML = ''));
