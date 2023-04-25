// create list items
const createListItems = (text) => {
  //   creating a div
  const div = document.createElement("div");
  // setting classes
  div.setAttribute("class", "d-flex bg-white px-3 py-5 flex-column list-card");
  //   creating a P
  const p = document.createElement("p");
  // setting classes
  p.setAttribute("class", "p-text");
  //   putting text
  p.innerText = text;
  //   creating a Icon
  const icon = document.createElement("i");
  //   setting classes
  icon.setAttribute("class", "fa-solid fa-trash-can icon");
  //   arranging elements
  div.appendChild(p);
  div.appendChild(icon);
};

// crearting a Input
// creating a div
const inpDiv = document.createElement("div");
// setting classes
inpDiv.setAttribute("class", "input-group mb-3 w-25 d-flex");
// creating a input
const input = document.createElement("input");
// setting attributes
input.setAttribute("type", "text");
input.setAttribute("id", "inp");
input.setAttribute("class", "form-control p-2");
input.setAttribute("placeholder", "what you want to do");
// creating button
const button = document.createElement("button");
// setting attributes
button.setAttribute("class", "input-group-text bg-primary text-white px-4");
button.setAttribute("id", "basic-addon2");
