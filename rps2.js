let compScore = 0;
let playScore = 0;

document.getElementById('para').innerHTML = 'Welcome! To play a best of five round of Rock, Paper, Scissors click one of the buttons below!';

const buttons = document.querySelectorAll('.btn'); 

function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};
    
function playRound(selection) {
    let compChoice = getComputerChoice();
    
    if ((selection == 'rock') && (compChoice == 'scissors') ||
        (selection == 'paper') && (compChoice == 'rock') ||
        (selection == 'scissors') && (compChoice == 'paper')) {
        ++playScore
        document.getElementById('result').innerHTML = ("Congratulations, you won the round! The score is: <br>" + "Player Score: " + `${playScore}` + "<br>" + "Computer Score: " + `${compScore}`);
    } else if (selection == compChoice) {
        document.getElementById('result').innerHTML = ("It's a tie! You both chose " + `${selection}` + ". The score is: <br>" + "Player Score: " + `${playScore}` + "<br>" + "Computer Score: " + `${compScore}`)
    } else if ((selection == 'rock') && (compChoice == 'paper') ||
        (selection == 'paper') && (compChoice == 'scissors') ||
        (selection == 'scissors') && (compChoice == 'rock')) {
        ++compScore;
        document.getElementById('result').innerHTML = ("Sorry, you lost the round. The score is: <br>" + "Player Score: " + `${playScore}` + "<br>" + "Computer Score: " + `${compScore}`);
    };
};

function print(hmm) {
    document.getElementById('result').innerHTML = "You clicked " + `${hmm}`;
}


buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('you clicked ' + `${button.value}`);
        playRound(button.value);
    })
});
