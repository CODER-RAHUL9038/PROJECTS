

let url = "http://universities.hipolabs.com/search?name=";

let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("#list");

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", async () => {
  let country = input.value;
  let clgData = await getColleges(country);
  show(clgData);
  input.value=""
});

function show(clgData) {
  ul.innerText = "";

  if (!Array.isArray(clgData)) {
    let li = document.createElement("li");
    li.innerText = "No college data found or an error occurred.";
    ul.append(li);
    return;
  }

  for (let clg of clgData) {
    let li = document.createElement("li");
    li.innerText = clg.name;
    ul.append(li);
  }
}

