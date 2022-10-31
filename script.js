class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
    this.updateDisplay();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  back() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "," && this.currentOperand.includes(",")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand ==! "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand.toString() + " " + this.operation;
    this.currentOperand = "";
  }

  compute() {
    let result;
    let previous = parseFloat(this.previousOperand);
    let current = parseFloat(this.currentOperand);
    if (isNaN(previous) || isNaN(current)) return;
  }

  updateDisplay() {
    this.currentOperandText.innerText = this.currentOperand;
    this.previousOperandText.innerText = this.previousOperand;
  }

}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const backButton = document.querySelector("[data-back]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");


const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})

operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
})

backButton.addEventListener("click", () => {
  calculator.back();
  calculator.updateDisplay();
})

clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
})

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
})