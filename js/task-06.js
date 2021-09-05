const inputElement = document.getElementById('validation-input');
const validInputMessageLength = Number(inputElement.dataset.length);

const removeAddClass = (removeClassName, addClassName) => {
  inputElement.classList.remove(removeClassName);
  inputElement.classList.add(addClassName);
};

inputElement.addEventListener('blur', event => {
  if (event.currentTarget.value.length === validInputMessageLength) {
    removeAddClass('invalid', 'valid');
  } else {
    removeAddClass('valid', 'invalid');
  }
});
