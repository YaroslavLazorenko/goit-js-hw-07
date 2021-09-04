const counterSpan = document.getElementById('value');
const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');

let counterValue = Number(counterSpan.textContent); // Get initial value of counter from markup

const decrement = () => {
  counterValue -= 1;
};

const increment = () => {
  counterValue += 1;
};

const updateCounterSpanValue = () => {
  counterSpan.textContent = counterValue;
};

decButton.addEventListener('click', () => {
  decrement();
  updateCounterSpanValue();
});

incButton.addEventListener('click', () => {
  increment();
  updateCounterSpanValue();
});
