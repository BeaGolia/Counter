document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const minusButton = document.querySelector('.calculator button:first-of-type');
  const plusButton = document.querySelector('.calculator button:last-of-type');
  const inputField = document.querySelector('.calculator input');

  // Initialize counter value
  let counterValue = 0;
  inputField.value = counterValue;

  // Decrease counter
  minusButton.addEventListener('click', function () {
    counterValue--;
    inputField.value = counterValue;
  });

  // Increase counter
  plusButton.addEventListener('click', function () {
    counterValue++;
    inputField.value = counterValue;
  });

  // Allow manual input
  inputField.addEventListener('input', function () {
    let newValue = parseInt(inputField.value, 10);
    if (!isNaN(newValue)) {
      counterValue = newValue;
    }
  });
});