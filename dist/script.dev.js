"use strict";

var projectOne = document.querySelector(".project__button__javascript_smiles_game");
var projectModalOne = document.querySelector(".project__modalone");

var projectInfoOne = function projectInfoOne() {
  projectModalOne.style.display = "flex";
  projectModalOne.style.borderStyle = "solid";
  projectModalOne.style.borderColor = "#fafafa";
  projectModalOne.style.borderWidth = "10px";
  projectModalOne.style.borderRadius = "10px";
  projectModalOne.innerHTML = "\n\n<section class=\"projectmodalone__container\">\n<img class=\"projectmodalone__image\" src=\"./images/smiles.gif\">\n\n<section class= \"projectmodalone__textcontainer\">\n<section class= \"projectmodalone__maincontent\">\n<h2 class=\"projectmodalone__header\"> Project.</h2>\n<h3 class= \"projectmodalone__subheader\" > Turn that frown upside down! </h2>\n<p class = \"projectmodalone__text\" > A vanilla JavaScript game created with an OOP Approach based on the nology hostile aliens logic. A class was used to create the game ships/faces and methods to generate the ships and push to an array. An additional method was created to generate the ships HTML in dynamic Javascript. The aim of the game is to turn all the frowns upside down. </p>\n</section>\n<section class= \"projectmodalone__skillscontainer\">\n<p class = \"skills_header\">Skills.</p>\n<p class = \"skills__tag\">JavaScript</p>\n<p class = \"skills__tag\">OOP Approach</p>\n<p class = \"skills__tag\">Semantic HTML</p>\n<p class = \"skills__tag\">CSS</p>\n<p class = \"skills__tag\">SCSS</p>\n<p class = \"skills__tag\">BEM</p>\n\n</section>\n</section>\n\n<section class = \"projectmodalone__buttons\">\n<button><a href=\"https://sod09.github.io/javascript-smiles-game/\" target=\"_blank\">Launch.</button>\n<button><a href=\"https://github.com/sod09/javascript-smiles-game\" target=\"_blank\"> Code. </button>\n</section>\n</section>\n  \n  ";
};

projectOne.addEventListener("click", projectInfoOne);
projectModalOne.addEventListener("click", function () {
  projectModalOne.style.display = "none";
});
var projectTwo = document.querySelector(".project__button__memory_game");
var projectModalTwo = document.querySelector(".project__modaltwo");

var projectInfoTwo = function projectInfoTwo() {
  projectModalTwo.style.display = "flex";
  projectModalTwo.style.borderStyle = "solid";
  projectModalTwo.style.borderColor = "#fafafa";
  projectModalTwo.style.borderWidth = "10px";
  projectModalTwo.style.borderRadius = "10px";
  projectModalTwo.innerHTML = "\n\n  <section class=\"projectmodaltwo__container\">\n  <img class=\"projectmodaltwo__image\" src=\"./images/memorygame.png\">\n\n  <section class= \"projectmodaltwo__textcontainer\">\n  <section class= \"projectmodaltwo__maincontent\">\n  <h2 class=\"projectmodaltwo__header\"> Project.</h2>\n  <h3 class= \"projectmodaltwo__subheader\" > The Memory Game </h2>\n  <p class = \"projectmodaltwo__text\" > A game created in vanilla JavaScript as part of the nology course. It is a memory game, in which the user must find the matching flag pairs after they have been displayed for a set time. Once the player starts the timer and finds the pairs the game displays a message, as well as a game over and winning message at the end of the game. </p>\n  </section>\n  <section class= \"projectmodaltwo__skillscontainer\">\n  <p class = \"skills_header\">Skills.</p>\n  <p class = \"skills__tag\">JavaScript</p>\n  <p class = \"skills__tag\">Semantic HTML</p>\n  <p class = \"skills__tag\">CSS</p>\n  <p class = \"skills__tag\">SCSS</p>\n  <p class = \"skills__tag\">BEM</p>\n \n  </section>\n  </section>\n\n  <section class = \"projectmodaltwo__buttons\">\n  <button><a href=\"https://sod09.github.io/nology_javascript_game/\" target=\"_blank\">Launch.</button>\n  <button><a href=\"https://github.com/sod09/nology_javascript_game\" target=\"_blank\"> Code. </button>\n  </section>\n  </section>\n \n  ";
};

projectTwo.addEventListener("click", projectInfoTwo);
projectModalTwo.addEventListener("click", function () {
  projectModalTwo.style.display = "none";
});
var projectThree = document.querySelector(".project__button__morse");
var projectModalThree = document.querySelector(".project__modalthree");

var projectInfoThree = function projectInfoThree() {
  projectModalThree.style.display = "flex";
  projectModalThree.style.borderStyle = "solid";
  projectModalThree.style.borderColor = "#fafafa";
  projectModalThree.style.borderWidth = "10px";
  projectModalThree.style.borderRadius = "10px";
  projectModalThree.innerHTML = "\n\n  <section class=\"projectmodalthree__container\">\n  <img class=\"projectmodalthree__image\" src=\"./images/morse.gif\">\n\n  <section class= \"projectmodalthree__textcontainer\">\n  <section class= \"projectmodalthree__maincontent\">\n  <h2 class=\"projectmodalthree__header\"> Project.</h2>\n  <h3 class= \"projectmodalthree__subheader\" > The Memory Game </h2>\n  <p class = \"projectmodalthree__text\" > Using an OOP Approach, I created two objects with Morse Code characters and English characters.\n\n  I created two functions, that targets the relevant object, converts it into an array and then maps through the characters to output the translation. These functions translated Morse to English and English to Morse. The function displayed the result in an output div.\n  \n  I also took a TDD approach and tested my code to ensure all functions and outputs were correct for the user. </p>\n  </section>\n  <section class= \"projectmodalthree__skillscontainer\">\n  <p class = \"skills_header\">Skills.</p>\n  <p class = \"skills__tag\">JavaScript</p>\n  <p class = \"skills__tag\">TDD</p>\n  <p class = \"skills__tag\">Jest Unit Testing</p>\n  <p class = \"skills__tag\">Semantic HTML</p>\n  <p class = \"skills__tag\">CSS</p>\n  <p class = \"skills__tag\">SCSS</p>\n  <p class = \"skills__tag\">BEM</p>\n  \n  </section>\n  </section>\n\n  <section class = \"projectmodalthree__buttons\">\n  <button><a href=\"https://sod09.github.io/nology-morse-code/\" target=\"_blank\">Launch.</button>\n  <button><a href=\"https://github.com/sod09/nology-morse-code\" target=\"_blank\"> Code. </button>\n  </section>\n  </section>\n \n  ";
};

projectThree.addEventListener("click", projectInfoThree);
projectModalThree.addEventListener("click", function () {
  projectModalThree.style.display = "none";
});
var projectFour = document.querySelector(".project__button__calculator");
var projectModalFour = document.querySelector(".project__modalfour");

var projectInfoFour = function projectInfoFour() {
  projectModalFour.style.display = "flex";
  projectModalFour.style.borderStyle = "solid";
  projectModalFour.style.borderColor = "#fafafa";
  projectModalFour.style.borderWidth = "10px";
  projectModalFour.style.borderRadius = "10px";
  projectModalFour.innerHTML = "\n\n  <section class=\"projectmodalfour__container\">\n  <img class=\"projectmodalfour__image\" src=\"./images/calc.gif\">\n\n  <section class= \"projectmodalfour__textcontainer\">\n  <section class= \"projectmodalfour__maincontent\">\n  <h2 class=\"projectmodalfour__header\"> Project.</h2>\n  <h3 class= \"projectmodalfour__subheader\" > The Memory Game </h2>\n  <p class = \"projectmodalfour__text\" > Using an OOP Approach, I created two objects with Morse Code characters and English characters.\n\n  I created two functions, that targets the relevant object, converts it into an array and then maps through the characters to output the translation. These functions translated Morse to English and English to Morse. The function displayed the result in an output div.\n  \n  I also took a TDD approach and tested my code to ensure all functions and outputs were correct for the user. </p>\n  </section>\n  <section class= \"projectmodalthree__skillscontainer\">\n  <p class = \"skills_header\">Skills.</p>\n  <p class = \"skills__tag\">JavaScript</p>\n  <p class = \"skills__tag\">TDD</p>\n  <p class = \"skills__tag\">Jest Unit Testing</p>\n  <p class = \"skills__tag\">Semantic HTML</p>\n  <p class = \"skills__tag\">CSS</p>\n  <p class = \"skills__tag\">SCSS</p>\n  <p class = \"skills__tag\">BEM</p>\n  \n  </section>\n  </section>\n\n  <section class = \"projectmodalfour__buttons\">\n  <button><a href=\"https://sod09.github.io/nology_calculator/\">Launch.</button>\n  <button><a href=\"https://github.com/sod09/nology_calculator\" target=\"_blank\"> Code. </button>\n  </section>\n  </section>\n \n  ";
};

projectFour.addEventListener("click", projectInfoFour);
projectModalFour.addEventListener("click", function () {
  projectModalFour.style.display = "none";
});