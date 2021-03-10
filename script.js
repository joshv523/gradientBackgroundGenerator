var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

//display CSS for the original background on page load
initialColor1 = document.querySelector(".color1").value;
initialColor2 = document.querySelector(".color2").value;
css.textContent = "linear-gradient(to right, " + initialColor1 + ", " + initialColor2 + ")";

// function to set and display gradient values
function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

// function to generate two colors on click of random button
function randomGradient() {
  var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
  var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
  css.textContent = body.style.background + ";";
  color1.value = randomColor1;
  color2.value = randomColor2;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomGradient);
