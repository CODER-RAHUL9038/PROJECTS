const charCont =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + // Uppercase
  "abcdefghijklmnopqrstuvwxyz" + // Lowercase
  "0123456789" + // Digits
  "!@#$%^&*()_+[]{}|;:,.<>?/~`-="; // Special characters

let btn = document.querySelector("button");
btn.addEventListener("click", newPassword);

let password = "";

function newPassword() {
  let input = document.querySelector("input");
  password = "";
  for (let i = 0; i <= 10; i++) {
    index = Math.floor(Math.random() * charCont.length);
    password = password + charCont[index];
  }
  input.value = password;

  //   ADDING COPY FUNCTION INSIDE THE newPassword AS TO ACTIVATE THIS COPY FUNCTION ONLY AFTER PASS IS GENERARED
  // COPY FUNCTIONALITY WITH MORDERN COPY TECHNIQUE

  let copyBtn = document.querySelector(".copy-image");

  copyBtn.addEventListener("click", copy);
  copyBtn.addEventListener("touchstart", copy);

  function copy() {
    copyBtn.classList.add("clicked");
    setTimeout(() => copyBtn.classList.remove("clicked"), 300);
    navigator.clipboard //RETURNS PROMISE
      .writeText(password)
      .then(() => {
        let toast = document.querySelector("#toast");

        toast.style.display = "block";
        toast.classList.add("show");

        setTimeout(() => {
          toast.style.display = "none";
        }, 1000);

        console.log("Copied! successfully");
      })
      .catch((e) => {
        console.log("copy failed: ", e);
      });
  }
}
