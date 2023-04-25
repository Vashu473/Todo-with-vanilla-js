//1. catching body tag--------
const body = document.querySelector("body");

//2. creating a container---------
const container = document.createElement("div");
container.setAttribute(
  "class",
  "container d-flex justify-content-center align-items-center flex-column"
);

//3. creating a heading-------
const heading = document.createElement("h1");
// setting attributes
heading.innerText = "TO-DO LIST";
heading.setAttribute("class", "text-white");

//4. creating a Input---------
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
button.innerText = "ADD";
// arranging elements
inpDiv.appendChild(input);
inpDiv.appendChild(button);

//5. list items conatiner div
const div = document.createElement("div");
div.setAttribute("class", "d-flex bg-white px-3 py-5 flex-column list-card");

//6. create list items
const createListItems = (text) => {
  //   creating a div
  const innerDiv = document.createElement("div");
  // setting classes
  innerDiv.setAttribute(
    "class",
    "d-flex justify-content-between w-100 cardText my-2"
  );
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
  innerDiv.appendChild(p);
  innerDiv.appendChild(icon);
  div.appendChild(innerDiv);
};

// arragement of all elements
body.appendChild(container);
container.appendChild(heading);
container.appendChild(inpDiv);
container.appendChild(div);
createListItems("hello vashu");

// adding logic
