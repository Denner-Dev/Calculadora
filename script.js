/**
 * Variável que armazena o valor atualmente digitado pelo usuário
 * @type {string}
 */
let currentInput = "";

/**
 * Variável que armazena a operação selecionada (+, -, *, /)
 * @type {string}
 */
let currentOperation = "";

/**
 * Variável que armazena o resultado da operação anterior
 * @type {number}
 */
let result = 0;

/**
 * Adiciona um número ao display quando o usuário clica em um botão numérico
 * @param {string} number - O número a ser adicionado (0-9 ou ponto decimal)
 */
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

/**
 * Define a operação matemática e prepara para o próximo número
 * Valida se há um número no display antes de executar
 * @param {string} operation - A operação a ser realizada (+, -, *, /)
 */
function appendOperation(operation) {
  // Não faz nada se o display estiver vazio
  if (currentInput === "") return;

  // Se já houver um resultado anterior, calcula o resultado intermediário
  if (result === 0) {
    result = parseFloat(currentInput);
  } else {
    result = operate(result, parseFloat(currentInput), currentOperation);
  }

  // Limpa o input e salva a operação
  currentInput = "";
  currentOperation = operation;
  updateDisplay();
}

/**
 * Realiza a operação matemática entre dois números
 * @param {number} a - Primeiro operando
 * @param {number} b - Segundo operando
 * @param {string} op - Operador matemático (+, -, *, /)
 * @returns {number} O resultado da operação
 */
function operate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      // Evita divisão por zero
      return b !== 0 ? a / b : 0;
    default:
      return b;
  }
}

/**
 * Calcula o resultado final da operação matemática
 * Executa a operação armazenada com os operandos fornecidos
 */
function calculate() {
  if (currentInput === "") return;
  result = operate(result, parseFloat(currentInput), currentOperation);
  currentInput = result.toString();
  currentOperation = "";
  updateDisplay();
}

/**
 * Limpa todos os valores e reseta a calculadora ao estado inicial
 */
function clearDisplay() {
  currentInput = "";
  currentOperation = "";
  result = 0;
  updateDisplay();
}

/**
 * Atualiza o display com o valor atual do input ou resultado
 * Sincroniza a exibição visual com os valores armazenados
 */
function updateDisplay() {
  document.getElementById("display").value = currentInput || result;
}
