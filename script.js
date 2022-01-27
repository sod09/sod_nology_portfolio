const projectOne = document.querySelector(
  ".project__button__javascript_smiles_game"
);
const projectModalOne = document.querySelector(".project__modalone");

const projectInfoOne = () => {
  projectModalOne.style.display = "flex";
  projectModalOne.style.borderStyle = "solid";
  projectModalOne.style.borderColor = "#fafafa";
  projectModalOne.style.borderWidth = "10px";
  projectModalOne.style.borderRadius = "10px";
  projectModalOne.innerHTML = `

<section class="projectmodalone__container">
<img class="projectmodalone__image" src="./smiles.gif">

<section class= "projectmodalone__textcontainer">
<section class= "projectmodalone__maincontent">
<h2 class="projectmodalone__header"> Project.</h2>
<h3 class= "projectmodalone__subheader" > Turn that frown upside down! </h2>
<p class = "projectmodalone__text" > A vanilla JavaScript game created with an OOP Approach based on the nology hostile aliens logic. A class was used to create the game ships/faces and methods to generate the ships and push to an array. An additional method was created to generate the ships HTML in dynamic Javascript. The aim of the game is to turn all the frowns upside down. </p>
</section>
<section class= "projectmodalone__skillscontainer">
<p class = "skills_header">Skills.</p>
<p class = "skills__tag">JavaScript</p>
<p class = "skills__tag">OOP Approach</p>
<p class = "skills__tag">Semantic HTML</p>
<p class = "skills__tag">CSS</p>
<p class = "skills__tag">SCSS</p>
<p class = "skills__tag">BEM</p>

</section>
</section>

<section class = "projectmodalone__buttons">
<button><a href="https://sod09.github.io/javascript-smiles-game/" target="_blank">Launch.</button>
<button><a href="https://github.com/sod09/javascript-smiles-game" target="_blank"> Code. </button>
</section>
</section>
  
  `;
};

projectOne.addEventListener("click", projectInfoOne);

projectModalOne.addEventListener("click", () => {
  projectModalOne.style.display = "none";
});

const projectTwo = document.querySelector(".project__button__memory_game");
const projectModalTwo = document.querySelector(".project__modaltwo");

const projectInfoTwo = () => {
  projectModalTwo.style.display = "flex";
  projectModalTwo.style.borderStyle = "solid";
  projectModalTwo.style.borderColor = "#fafafa";
  projectModalTwo.style.borderWidth = "10px";
  projectModalTwo.style.borderRadius = "10px";
  projectModalTwo.innerHTML = `

  <section class="projectmodaltwo__container">
  <img class="projectmodaltwo__image" src="./memorygame.png">

  <section class= "projectmodaltwo__textcontainer">
  <section class= "projectmodaltwo__maincontent">
  <h2 class="projectmodaltwo__header"> Project.</h2>
  <h3 class= "projectmodaltwo__subheader" > The Memory Game </h2>
  <p class = "projectmodaltwo__text" > A game created in vanilla JavaScript as part of the nology course. It is a memory game, in which the user must find the matching flag pairs after they have been displayed for a set time. Once the player starts the timer and finds the pairs the game displays a message, as well as a game over and winning message at the end of the game. </p>
  </section>
  <section class= "projectmodaltwo__skillscontainer">
  <p class = "skills_header">Skills.</p>
  <p class = "skills__tag">JavaScript</p>
  <p class = "skills__tag">Semantic HTML</p>
  <p class = "skills__tag">CSS</p>
  <p class = "skills__tag">SCSS</p>
  <p class = "skills__tag">BEM</p>
 
  </section>
  </section>

  <section class = "projectmodaltwo__buttons">
  <button><a href="https://sod09.github.io/nology_javascript_game/" target="_blank">Launch.</button>
  <button><a href="https://github.com/sod09/nology_javascript_game" target="_blank"> Code. </button>
  </section>
  </section>
 
  `;
};

projectTwo.addEventListener("click", projectInfoTwo);

projectModalTwo.addEventListener("click", () => {
  projectModalTwo.style.display = "none";
});

const projectThree = document.querySelector(".project__button__morse");
const projectModalThree = document.querySelector(".project__modalthree");

const projectInfoThree = () => {
  projectModalThree.style.display = "flex";
  projectModalThree.style.borderStyle = "solid";
  projectModalThree.style.borderColor = "#fafafa";
  projectModalThree.style.borderWidth = "10px";
  projectModalThree.style.borderRadius = "10px";
  projectModalThree.innerHTML = `

  <section class="projectmodalthree__container">
  <img class="projectmodalthree__image" src="./morse.gif">

  <section class= "projectmodalthree__textcontainer">
  <section class= "projectmodalthree__maincontent">
  <h2 class="projectmodalthree__header"> Project.</h2>
  <h3 class= "projectmodalthree__subheader" > The Memory Game </h2>
  <p class = "projectmodalthree__text" > Using an OOP Approach, I created two objects with Morse Code characters and English characters.

  I created two functions, that targets the relevant object, converts it into an array and then maps through the characters to output the translation. These functions translated Morse to English and English to Morse. The function displayed the result in an output div.
  
  I also took a TDD approach and tested my code to ensure all functions and outputs were correct for the user. </p>
  </section>
  <section class= "projectmodalthree__skillscontainer">
  <p class = "skills_header">Skills.</p>
  <p class = "skills__tag">JavaScript</p>
  <p class = "skills__tag">TDD</p>
  <p class = "skills__tag">Jest Unit Testing</p>
  <p class = "skills__tag">Semantic HTML</p>
  <p class = "skills__tag">CSS</p>
  <p class = "skills__tag">SCSS</p>
  <p class = "skills__tag">BEM</p>
  
  </section>
  </section>

  <section class = "projectmodalthree__buttons">
  <button><a href="https://sod09.github.io/nology-morse-code/" target="_blank">Launch.</button>
  <button><a href="https://github.com/sod09/nology-morse-code" target="_blank"> Code. </button>
  </section>
  </section>
 
  `;
};

projectThree.addEventListener("click", projectInfoThree);

projectModalThree.addEventListener("click", () => {
  projectModalThree.style.display = "none";
});

const projectFour = document.querySelector(".project__button__calculator");
const projectModalFour = document.querySelector(".project__modalfour");

const projectInfoFour = () => {
  projectModalFour.style.display = "flex";
  projectModalFour.style.borderStyle = "solid";
  projectModalFour.style.borderColor = "#fafafa";
  projectModalFour.style.borderWidth = "10px";
  projectModalFour.style.borderRadius = "10px";
  projectModalFour.innerHTML = `

  <section class="projectmodalfour__container">
  <img class="projectmodalfour__image" src="./images/calc.gif">

  <section class= "projectmodalfour__textcontainer">
  <section class= "projectmodalfour__maincontent">
  <h2 class="projectmodalfour__header"> Project.</h2>
  <h3 class= "projectmodalfour__subheader" > The Memory Game </h2>
  <p class = "projectmodalfour__text" > Using an OOP Approach, I created two objects with Morse Code characters and English characters.

  I created two functions, that targets the relevant object, converts it into an array and then maps through the characters to output the translation. These functions translated Morse to English and English to Morse. The function displayed the result in an output div.
  
  I also took a TDD approach and tested my code to ensure all functions and outputs were correct for the user. </p>
  </section>
  <section class= "projectmodalthree__skillscontainer">
  <p class = "skills_header">Skills.</p>
  <p class = "skills__tag">JavaScript</p>
  <p class = "skills__tag">TDD</p>
  <p class = "skills__tag">Jest Unit Testing</p>
  <p class = "skills__tag">Semantic HTML</p>
  <p class = "skills__tag">CSS</p>
  <p class = "skills__tag">SCSS</p>
  <p class = "skills__tag">BEM</p>
  
  </section>
  </section>

  <section class = "projectmodalfour__buttons">
  <button><a href="https://sod09.github.io/nology_calculator/">Launch.</button>
  <button><a href="https://github.com/sod09/nology_calculator" target="_blank"> Code. </button>
  </section>
  </section>
 
  `;
};

projectFour.addEventListener("click", projectInfoFour);

projectModalFour.addEventListener("click", () => {
  projectModalFour.style.display = "none";
});
