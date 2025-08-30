let btns = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let delBtn = document.querySelector(".delete");
let equalBtn = document.querySelector(".equal");
const operators = ["+", "-", "*", "/", "÷", "x"];

let str = "";

// For keydown feature
document.addEventListener("keydown", function (e) {
  let key = e.key;

  // allow numbers 0-9
  if (key >= "0" && key <= "9") {
    
    // More than 30 Characters
    if (display.innerText.length > 28) {
      alert("Maximum Character Exceeds!");
      return;
    }
    if (display.innerText.length > 15) {
      display.style.fontSize = "1.5rem"; // shrink font
    }
    if (display.innerText.length > 18) {
      display.style.fontSize = "1.1rem"; // shrink further
    }

    str += key;

    display.innerText = str;
  }

  // allow operators
  if (["+", "-", "*", "/"].includes(key)) {
    if (operators.includes(key) && operators.includes(str.slice(-1))) {
      return;
    }
    str += key;
    display.innerText = str;
  }

  // allow Enter for "="
  if (key === "Enter") {
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
  }

  // allow Backspace for delete
  if (key === "Backspace") {
    str = str.slice(0, -1);
    display.innerText = str;
  }

  // allow Escape to clear
  if (key === "Escape") {
    str = "";
    display.innerText = str;
    display.style.fontSize = "2rem";
  }
});

// For mouse and touch
for (let btn of btns) {
  btn.addEventListener("click", function (e) {
    if (e.target.innerText == "DEL") {
      str = str.slice(0, -1);
      display.innerText = str;
    } else if (e.target.innerText == "AC") {
      str = "";
      display.innerText = str;
      display.style.fontSize = "2rem";
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
      // More than 30 Characters
      if (display.innerText.length > 28) {
        alert("Maximum Character Exceeds!");
        return;
      }
      if (display.innerText.length > 15) {
        display.style.fontSize = "1.5rem"; // shrink font
      }
      if (display.innerText.length > 18) {
        display.style.fontSize = "1.1rem"; // shrink further
      }

      str += e.target.innerText;
      display.innerText = str;
    }
  });
}
