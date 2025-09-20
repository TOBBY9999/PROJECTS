let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");

// code to generate computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const choiceIdx = Math.floor(Math.random() * 3);
  return options[choiceIdx];
};
const drawGame = () => {
  console.log("Game was Draw");
};

const PlayGame = (userchoice) => {
  console.log("userchoice= ", userchoice);
  const compChoice = genCompChoice();
  console.log("compchoice= ", compChoice);

  if (userchoice === compChoice) {
    // draw game
    drawGame();
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // console.log("choice was clicked")

    const userchoice = choice.getAttribute("id");
    // console.log( userchoice);
    PlayGame(userchoice);
  });
});
