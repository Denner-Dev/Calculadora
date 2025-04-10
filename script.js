let currentInput = "";
let currentOperation = "";
let result = 0;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperation(operation) {
  if (currentInput === "") return; // Não faz nada se o display estiver vazio

  if (result === 0) {
    result = parseFloat(currentInput);
  } else {
    result = operate(result, parseFloat(currentInput), currentOperation);
  }

  currentInput = "";
  currentOperation = operation;
  updateDisplay();
}

function operate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return b;
  }
}

function calculate() {
  if (currentInput === "") return;
  result = operate(result, parseFloat(currentInput), currentOperation);
  currentInput = result.toString();
  currentOperation = "";
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  currentOperation = "";
  result = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentInput || result;
}
