let btns = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let delBtn = document.querySelector(".delete");
let equalBtn = document.querySelector(".equal");
const operators = ["+", "-", "*", "/", "÷", "x"];

let str = "";

for (let btn of btns) {
  btn.addEventListener("click", function (e) {
    if (e.target.innerText == "DEL") {
      str = str.slice(0, -1);
      display.innerText = str;
    } else if (e.target.innerText == "AC") {
      str = "00";
      display.innerText = str;
    } else if (e.target.innerText == "=") {
      try {
        str = str
          .replace(/\b0+(\d+)/g, "$1")
          .replace(/x/g, "*")
          .replace(/÷/g, "/");
        str = eval(str).toString();
        display.innerText = str;
      } catch (error) {
        display.innerText = "Error";
        str = "";
        console.log(error);
      }
    } else {
      // No consecutive operator logic
      if (
        operators.includes(e.target.innerText) &&
        operators.includes(str.slice(-1))
      ) {
        return;
      }
      str += e.target.innerText;
      display.innerText = str;
    }
  });
}
