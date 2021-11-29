result = document.getElementById("viewer");
numbers = document.getElementsByClassName("num");
clear = document.getElementById("clear");
plus = document.getElementById("plus");

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

clear.addEventListener("click", clearButtonListener);

switch () {
  case "plus":
    result.innerHTML = number + number;
    break;

  case "minus":
    result.innerHTML = number - number;
    break;

  case "times":
    result.innerHTML = number * number;
    break;

  case "divided by":
    result.innerHTML = number / number;
    break;
}
