    let compScore = 0; 
    let playScore = 0; 
    let tieScore = 0;

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
        ++compScore;
        console.log(compScore);
        console.log(playScore);
        return "You lose";
    } else if ((randomPick === 'PAPER') && (choice === 'ROCK')) {
        ++compScore;
        console.log(compScore);
        console.log(playScore);
        return "You lose";
    } else if ((randomPick === 'SCISSORS') && (choice === 'PAPER')) {
        ++compScore;
        console.log(compScore);
        console.log(playScore);
        return "You lose";
    } else if ((randomPick === 'ROCK') && (choice === 'ROCK')) {
        ++tieScore;
        console.log(compScore);
        console.log(playScore);
        return "Tie!";
    } else if ((randomPick === 'PAPER') && (choice === 'PAPER')) {
        ++tieScore;
        console.log(compScore);
        console.log(playScore);
        return "Tie!";
    } else if ((randomPick === 'SCISSORS') && (choice === 'SCISSORS')) {
        ++tieScore;
        console.log(compScore);
        console.log(playScore);
        return "Tie!";
    } else if ((randomPick === 'ROCK') && (choice === 'PAPER')) {
        ++playScore;
        console.log(compScore);
        console.log(playScore);
        return "You win";
    } else if ((randomPick === 'PAPER') && (choice === 'SCISSORS')) {
        ++playScore;
        console.log(compScore);
        console.log(playScore);
        return "You win";
    } else if ((randomPick === 'SCISSORS') && (choice === 'ROCK')) {
        ++playScore
        console.log(compScore);
        console.log(playScore);
        return "You win";
    } else return "Error, try again.";
}

function game() {
    

    //how do i use a return from an earlier function as an input to an if else statement?
    
    for (let i = 0; i < 5; i++) {
        rps();
        console.log("You have played" + " " + (i + 1) + " " + "out of 5 times!")
        if (i === 4) {
            if (playScore > compScore) {
                console.log("Congrats, you are the winner!");
                playScore = 0;
                compScore = 0;
                tieScore = 0;
            } else if (compScore > playScore) {
                console.log("Sorry, you lose");
                playScore = 0;
                compScore = 0;
                tieScore = 0;
            } else if (compScore === playScore) {
                console.log("Tie, play again!");
                playScore = 0;
                compScore = 0;
                tieScore = 0;
        }
        }
    }
}