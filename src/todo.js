{
  /* <li>
  <input type="checkbox" name="" id="" />
  <p></p>
  <button></button>
</li> */
}

let li = document.createElement("li");
let input = document.createElement("input");
input.type = "checkbox";
let button = document.createElement("button");
button.textContent = "x";
let p = document.createElement("p");
p.textContent = "Learn React";

li.append(input, p, button);
