let string = document.querySelector("h1").textContent;
let array = string.split("");
document.querySelector("h1").textContent = "";
let counter = 0;
console.log(array);

array.forEach(putInSpan);

function putInSpan(letter) {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.setProperty("animation-delay", `${counter}s`);
  document.querySelector("h1").appendChild(span);
  counter += 0.04;
}
