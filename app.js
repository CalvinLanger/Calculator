result = document.getElementById("viewer");
numbers = document.getElementsByClassName("num");
clear = document.getElementById("clear");
plus = document.getElementById("plus");
minus = document.getElementById("minus");
multiplication = document.getElementById("multiplication");
division = document.getElementById("division");
dot = document.getElementById("dot");
equal = document.getElementById("equals");

const operations = new Set();
operations.add("+");
operations.add("-");
operations.add("*");
operations.add("/");
operations.add(".");

const numberClickedListener = function () {
  const number = this.getAttribute("data-num");
  if (result.innerHTML === "0") {
    result.innerHTML = number;
  } else {
    result.innerHTML = result.innerHTML + number;
  }
};

for (i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", numberClickedListener);
}

const clearButtonListener = function () {
  result.innerHTML = 0;
};

const operationListener = function (operation) {
  const lastChar = result.innerHTML.charAt(result.innerHTML.length - 1);
  console.log("\"" + lastChar + "\"")
  console.log(result.innerHTML.length);
  if (!operations.has(lastChar)) {
    result.innerHTML = result.innerHTML + operation;
  }
};

const equalButtonListener = function () {
  
};

clear.addEventListener("click", clearButtonListener);
plus.addEventListener("click", () => operationListener("+"));
minus.addEventListener("click", () => operationListener("-"));
division.addEventListener("click", () => operationListener("/"));
multiplication.addEventListener("click", () => operationListener("*"));
dot.addEventListener("click", () => operationListener("."));
equal.addEventListener("click", equalButtonListener);
