const projectOne = document.querySelector(".project__image--one");
const projectModalOne = document.querySelector(".project__modalone");

const projectInfoOne = () => {
  projectModalOne.style.display = "flex";
  projectModalOne.style.borderStyle = "solid";
  projectModalOne.style.borderColor = "#fafafa";
  projectModalOne.style.borderWidth = "10px";
  projectModalOne.style.borderRadius = "10px";
  projectModalOne.innerHTML = `

  <section class="projectmodalone__container">
  <img class="projectmodalone__image" src="./memorygame.png">

  <section class= "projectmodalone__textcontainer">
  <section class= "projectmodalone__maincontent">
  <h2 class="projectmodalone__header"> Project.</h2>
  <h3 class= "projectmodalone__subheader" > The Memory Game </h2>
  <p class = "projectmodalone__text" > A game created in vanilla JavaScript as part of the nology course. It is a memory game, in which the user must find the matching flag pairs after they have been displayed for a set time. Once the player starts the timer and finds the pairs the game displays a message, as well as a game over and winning message at the end of the game. </p>
  </section>
  <section class= "projectmodalone__skillscontainer">
  <p class = "skills_header">Skills.</p>
  <p class = "skills__tag">HTML</p>
  <p class = "skills__tag">CSS</p>
  <p class = "skills__tag">SCSS</p>
  <p class = "skills__tag">BEM</p>
  <p class = "skills__tag">JavaScript</p>
  </section>
  </section>

  <section class = "projectmodalone__buttons">
  <button><a href="https://sod09.github.io/nology_javascript_game/" target="_blank">Launch.</button>
  <button><a href="https://github.com/sod09/nology_javascript_game" target="_blank"> Code. </button>
  </section>
  </section>
  `;
};

projectOne.addEventListener("click", projectInfoOne);

projectModalOne.addEventListener("click", () => {
  projectModalOne.style.display = "none";
});

const projectTwo = document.querySelector(".project__image--two");
const projectModalTwo = document.querySelector(".project__modaltwo");

const projectInfoTwo = () => {
  projectModalTwo.style.display = "flex";
  projectModalTwo.style.borderStyle = "solid";
  projectModalTwo.style.borderColor = "#fafafa";
  projectModalTwo.style.borderWidth = "10px";
  projectModalTwo.style.borderRadius = "10px";
  projectModalTwo.innerHTML = `

  <section class="projectmodaltwo__container">
  <img class="projectmodaltwo__image" src="./smiles.gif">

  <section class= "projectmodaltwo__textcontainer">
  <section class= "projectmodaltwo__maincontent">
  <h2 class="projectmodaltwo__header"> Project.</h2>
  <h3 class= "projectmodaltwo__subheader" > Turn that frown upside down! </h2>
  <p class = "projectmodaltwo__text" > A vanilla JavaScript game created with an OOP Approach based on the nology hostile aliens logic. A class was used to create the game ships/faces and methods to generate the ships and push to an array. An additional method was created to generate the ships HTML in dynamic Javascript. The aim of the game is to turn all the frowns upside down. </p>
  </section>
  <section class= "projectmodaltwo__skillscontainer">
  <p class = "skills_header">Skills.</p>
  <p class = "skills__tag">HTML</p>
  <p class = "skills__tag">CSS</p>
  <p class = "skills__tag">SCSS</p>
  <p class = "skills__tag">BEM</p>
  <p class = "skills__tag">JavaScript</p>
  <p class = "skills__tag">OOP Approach</p>
  </section>
  </section>

  <section class = "projectmodaltwo__buttons">
  <button><a href="https://sod09.github.io/javascript-smiles-game/" target="_blank">Launch.</button>
  <button><a href="https://github.com/sod09/javascript-smiles-game" target="_blank"> Code. </button>
  </section>
  </section>
  `;
};

projectTwo.addEventListener("click", projectInfoTwo);

projectModalTwo.addEventListener("click", () => {
  projectModalTwo.style.display = "none";
});
