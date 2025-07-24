let btn = document.querySelector("#addTaskBtn");
let input = document.querySelector("#taskInput");
let ul = document.querySelector("#taskList");

btn.addEventListener("click", addTask);

// INSERT ITEMS ON PRESSING ENTER KEY
input.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
        addTask()
    }
})


function addTask() {
  let textInput = input.value.trim();

  if (textInput === "") {
    alert("Please enter a task.");
    return;
  }
  // creating list items
  let li = document.createElement("li");
  li.innerText = textInput;
  ul.appendChild(li);
  input.value = "";
  

  // creating Delete button
  let delBtn = document.createElement("span");
  delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  li.appendChild(delBtn);
  saveData()
}



// checked and delete feature and using event delegation
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  } else if (e.target.nodeName === "SPAN" || e.target.nodeName === "I") {
    e.target.closest('li').remove();
    saveData()

  }
});


function saveData(){
    localStorage.setItem("data", taskList.innerHTML)
}
function showData(){
    taskList.innerHTML = localStorage.getItem("data")
}
// Show Saved data by Browser
showData()
