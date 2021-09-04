const inputElement = document.getElementById('name-input');
const spanElement = document.getElementById('name-output');

inputElement.addEventListener('input', event => {
  const inputValue = event.currentTarget.value;

  spanElement.textContent = inputValue !== '' ? inputValue : 'незнакомец';
});
