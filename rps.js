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
        return 0;
    } else if ((randomPick === 'PAPER') && (choice === 'ROCK')) {
        return 0;
    } else if ((randomPick === 'SCISSORS') && (choice === 'PAPER')) {
        return 0;
    } else if ((randomPick === 'ROCK') && (choice === 'ROCK')) {
        return 1;
    } else if ((randomPick === 'PAPER') && (choice === 'PAPER')) {
        return 1;
    } else if ((randomPick === 'SCISSORS') && (choice === 'SCISSORS')) {
        return 1;
    } else if ((randomPick === 'ROCK') && (choice === 'PAPER')) {
        return 2;
    } else if ((randomPick === 'PAPER') && (choice === 'SCISSORS')) {
        return 2;
    } else if ((randomPick === 'SCISSORS') && (choice === 'ROCK')) {
        return 2;
    } else return "Error, try again.";
}

function game() {
    let compScore = 0; 
    let playScore = 0; 
    let tieScore = 0;

    
    for (let i = 0; i < 5; i++) {
        let round = rps();

        if (round = 0) {
            ++compScore;
        } else if (round = 2) {
            ++playScore;
        } else ++tieScore;
        console.log("You have played" + " " + (i + 1) + " " + "out of 5 times!")
        console.log(compScore);
        console.log(playScore);
    }
}