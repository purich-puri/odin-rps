var playerSelection = "";
var computerSelection = "";
var count = 0;
var playerWon = 0;
var cpuWon = 0;
var draw = 0;

function playerPicked(picked) {
  playerSelection = picked.toString();
  //console.log("player: " + playerSelection);

  computerPlay();
  playRound();
  playerSelection = "";
  computerSelection = "";

  if (count === 5) {
    let elems = document.querySelectorAll(".choiceBtn");
    for (let i = 0; i < elems.length; i++) {
      elems[i].disabled = true;
    }
  }
}

function clearStat() {
  playerSelection = "";
  computerSelection = "";
  count = 0;
  playerWon = 0;
  cpuWon = 0;
  draw = 0;
  document.getElementById("resultDisplay").innerHTML = "";
  document.getElementById("winCount").innerHTML =
    "PLAYER WON: " + playerWon + ", CPU WON: " + cpuWon + ", DRAW: " + draw;
  document.getElementById("gameCount").innerHTML = "GAME " + count + " of 5";

  let elems = document.querySelectorAll(".choiceBtn");
  for (let i = 0; i < elems.length; i++) {
    elems[i].disabled = false;
  }
}

function computerPlay() {
  //Define Rock, Paper, Scissor into integers
  //1. rock
  //2. paper
  //3. scissor
  let cpuRandNum = Math.floor(Math.random() * 3) + 1;
  if (cpuRandNum === 1) {
    computerSelection = "rock";
  } else if (cpuRandNum === 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissor";
  }
  //console.log("cpu: " + computerSelection);
}

function playRound() {
  if (playerSelection === computerSelection) {
    draw++;
    document.getElementById("resultDisplay").innerHTML = "DRAW";
    //console.log("DRAW");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerWon++;
    document.getElementById("resultDisplay").innerHTML = "PLAYER WON";
    //console.log("WIN");
  } else {
    cpuWon++;
    document.getElementById("resultDisplay").innerHTML = "CPU WON";
    //console.log("LOSE");
  }
  document.getElementById("winCount").innerHTML =
    "PLAYER WON: " + playerWon + ", CPU WON: " + cpuWon + ", DRAW: " + draw;
  count++;
  document.getElementById("gameCount").innerHTML = "GAME " + count + " of 5";
}
