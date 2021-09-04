const inputElement = document.getElementById('validation-input');
const validInputMessageLength = Number(inputElement.dataset.length);

inputElement.addEventListener('blur', event => {
  if (event.currentTarget.value.length === validInputMessageLength) {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
  } else {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
  }
});
