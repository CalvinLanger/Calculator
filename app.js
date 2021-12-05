//Variables
result = document.getElementById("viewer");
numberButtons = document.getElementsByClassName("num");
clear = document.getElementById("clear");
plus = document.getElementById("plus");
minus = document.getElementById("minus");
multiplication = document.getElementById("multiplication");
division = document.getElementById("division");
dot = document.getElementById("dot");
equal = document.getElementById("equals");
resetAll = document.getElementById("reset");
lastChar = result.innerHTML.charAt(result.innerHTML.length - 1);

const operations = new Set();
operations.add("+");
operations.add("-");
operations.add("*");
operations.add("/");
operations.add(".");

//Number chooser
const numberClickedListener = function () {
  const number = this.getAttribute("data-num");
  if (result.innerHTML === "0") {
    result.innerHTML = number;
  } else {
    result.innerHTML = result.innerHTML + number;
  }
};

for (i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", numberClickedListener);
}

//Add operator to the end of string in result or change last operator
const operationListener = function (operation) {
  lastChar = result.innerHTML.charAt(result.innerHTML.length - 1);
  if (!operations.has(lastChar)) {
    result.innerHTML = result.innerHTML + operation;
  } else {
    result.innerHTML = result.innerHTML.slice(0, -1);
    result.innerHTML = result.innerHTML + operation;
  };
};

//Delete last character from string in result
const clearButtonListener = function () {
    result.innerHTML = 0;
};

//String to Number and compute equation
const equationButtonListener = function () {
  result.innerHTML = eval(result.innerHTML);
};

clear.addEventListener("click", clearButtonListener);
plus.addEventListener("click", () => operationListener("+"));
minus.addEventListener("click", () => operationListener("-"));
division.addEventListener("click", () => operationListener("/"));
multiplication.addEventListener("click", () => operationListener("*"));
dot.addEventListener("click", () => operationListener("."));
equal.addEventListener("click", equationButtonListener);
