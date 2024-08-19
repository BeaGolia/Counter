document.addEventListener("DOMContentLoaded", function () {
  
  const counterContainer = document.getElementById('counter-container');
  
  const calculatorDiv = document.createElement('div');
  calculatorDiv.className = 'calculator';

  const minusButton = document.createElement('button');
  minusButton.type = 'submit';
  minusButton.textContent = '-';

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.placeholder = '0';

  const plusButton = document.createElement('button');
  plusButton.type = 'submit';
  plusButton.textContent = '+';

  calculatorDiv.appendChild(minusButton);
  calculatorDiv.appendChild(inputField);
  calculatorDiv.appendChild(plusButton);
  counterContainer.appendChild(calculatorDiv);

  let counterValue = 0;
  inputField.value = counterValue;

  minusButton.addEventListener('click', function () {
    counterValue--;
    inputField.value = counterValue;
  });

  plusButton.addEventListener('click', function () {
    counterValue++;
    inputField.value = counterValue;
  });

  inputField.addEventListener('input', function () {
    let newValue = parseInt(inputField.value, 10);
    if (!isNaN(newValue)) {
      counterValue = newValue;
    }
  });
});
