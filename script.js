var css = document.querySelector("h3");
var color01 = document.querySelector(".color01");
var color02 = document.querySelector(".color02");
var body = document.getElementById("gradient");

function changeColor() {
  body.style.background =
    "linear-gradient(to right, " + color01.value + ", " + color02.value + ")";
  css.textContent = body.style.background + ";";
}

color01.addEventListener("input", changeColor);

color02.addEventListener("input", changeColor);
