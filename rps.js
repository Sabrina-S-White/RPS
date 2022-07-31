//computer will randomly choose rock, paper, or scissors

//player will input rock, paper, or scissors through an alert

//a function will compare the computer's choice against the player's choice
    //if player > computer, "You win!"
    //if tie, "tie, play again!"
    //if computer > player, "You lose!"


const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

   function getComputerChoice() {
   let randomPick = Math.floor(Math.random() * 3); 
   if (randomPick === 0) {
    return 'ROCK';
   } else if (randomPick === 1) {
    return 'PAPER';
   } else {
    return 'SCISSORS';
   }
}

function playerSelection() {
    let choice = prompt('Please enter Rock, Paper, or Scissors')
    return choice.toUpperCase();
    console.log(choice);
}

function rps() {
    let randomPick = getComputerChoice(); 
    let choice = playerSelection();

    console.log("Computer's Choice:" + ' ' + randomPick);
    console.log("Your Choice:" + ' ' + choice);

    if ((randomPick === 'ROCK') && (choice === 'SCISSORS')) {
        console.log("You lose!");
    } else if ((randomPick === 'PAPER') && (choice === 'ROCK')) {
        console.log("You lose!");
    } else if ((randomPick === 'SCISSORS') && (choice === 'PAPER')) {
        console.log("You lose!");
    } else if ((randomPick === 'ROCK') && (choice === 'ROCK')) {
        console.log("Tie, play again!");
    } else if ((randomPick === 'PAPER') && (choice === 'PAPER')) {
        console.log("Tie, play again!");
    } else if ((randomPick === 'SCISSORS') && (choice === 'SCISSORS')) {
        console.log("Tie, play again!");
    } else if ((randomPick === 'ROCK') && (choice === 'PAPER')) {
        console.log("You win!");
    } else if ((randomPick === 'PAPER') && (choice === 'SCISSORS')) {
        console.log("You win!");
    } else if ((randomPick === 'SCISSORS') && (choice === 'ROCK')) {
        console.log("You win!");
    } else return "Error, try again."
}
