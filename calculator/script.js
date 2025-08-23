let btns = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let delBtn = document.querySelector(".delete");
let equalBtn = document.querySelector(".equal");
const operators = ["+", "-", "*", "/"];

let str = "";
for (let btn of btns) {
  btn.addEventListener("click", function (e) {
    if (display.innerText === "00") {
      display.innerText = ""; // clear placeholder when user clicks
    }

    // EVAL EQUAL
    if (e.target.innerText == "=") {
      if (!operators.includes(str.slice(-1)) && (display.innerText !== "00")) {
        try {
          str = eval(str).toString();
          display.innerText = str;
        } catch (error) {
          display.innerText = "Error";
          str = "";
        }
      }

      //AC
    } else if (e.target.innerText == "AC") {
      display.innerText = "00";
      str = "";
    }
    //DELETE
    else if (e.target.innerText == "DEL") {
      if (str.endsWith(" ")) {
        str = str.slice(0, -3);
        display.innerText = str;
      } else {
        str = str.slice(0, -1);
        display.innerText = str;
      }
      // APPENDING EACH NUMBERS ON DISPLAY
    } else {
      let value = e.target.innerText;
      // CHECKING CONSECUTIVE OPERATORS
      if (operators.includes(value) && operators.includes(str.slice(-1))) {
        return; // do nothing if last char is also an operator
      }

      str = str + e.target.innerText;
      display.innerText = str;
    }
  });
}
