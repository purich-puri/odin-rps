var playerSelection = 0;
var computerSelection = 0;
var count = 0;
var playerWon = 0;
var cpuWon = 0;
var draw = 0;

function playerPlay(player) {
  //turn player string input into integer
  //invalid string will use the default case
  switch (player) {
    case "ROCK":
      return (playerSelection = 1);
    case "PAPER":
      return (playerSelection = 2);
    case "SCISSOR":
      return (playerSelection = 3);
    default:
      return (playerSelection = 0);
  }
}

function computerPlay() {
  //Define Rock, Paper, Scissor into integers
  //1. rock
  //2. paper
  //3. scissor
  return (computerSelection = Math.floor(Math.random() * 3) + 1);
}

function playRound() {
  //set players input into all uppercase to compare correctly
  playerPlay(playerChoice.toUpperCase());
  computerPlay();

  switch (true) {
    case playerSelection === 1 && computerSelection === 1:
      return console.log("Player: ROCK, CPU: ROCK \n ------DRAW------"), draw++;
    case playerSelection === 1 && computerSelection === 2:
      return (
        console.log("Player: ROCK, CPU: PAPER \n ------PLAYER LOST------"),
        cpuWon++
      );
    case playerSelection === 1 && computerSelection === 3:
      return (
        console.log("Player: ROCK, CPU: SCISSOR \n ------PLAYER WON------"),
        playerWon++
      );
    case playerSelection === 2 && computerSelection === 1:
      return (
        console.log("Player: PAPER, CPU: ROCK \n ------PLAYER WON------"),
        playerWon++
      );
    case playerSelection === 2 && computerSelection === 2:
      return (
        console.log("Player: PAPER, CPU: PAPER \n ------DRAW------"), draw++
      );
    case playerSelection === 2 && computerSelection === 3:
      return (
        console.log("Player: PAPER, CPU: SCISSOR \n ------PLAYER LOST------"),
        cpuWon++
      );
    case playerSelection === 3 && computerSelection === 1:
      return (
        console.log("Player: SCISSOR, CPU: ROCK \n ------PLAYER LOST------"),
        cpuWon++
      );
    case playerSelection === 3 && computerSelection === 2:
      return (
        console.log("Player: SCISSOR, CPU: PAPER \n ------PLAYER WON------"),
        playerWon++
      );
    case playerSelection === 3 && computerSelection === 3:
      return (
        console.log("Player: SCISSOR, CPU: SCISSOR \n ------DRAW------"), draw++
      );
    case playerSelection === 0:
      return (
        console.log("Player: INVALID CHOICE, CPU WIN BY DEFAULT"), cpuWon++
      );
  }
}
do {
  var playerChoice = prompt("Please type rock, paper or scissor", "rock");
  playRound();

  //console.log(playerSelection, computerSelection);
  count++;
  console.log("Game " + count + " out of 5");
} while (count < 5);

console.log(
  "PLAYER Won: " + playerWon + ", CPU Won: " + cpuWon + ", DRAW: " + draw
);
