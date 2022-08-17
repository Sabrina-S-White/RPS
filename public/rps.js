    let compScore = 0; 
    let playScore = 0; 
    const buttons = document.querySelectorAll('input');

        

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)].toUpperCase();
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
};


function rps(choice) {
    let randomPick = getComputerChoice(); 
    let result = '';
    
    if ((randomPick === 'ROCK') && (choice === 'SCISSORS') || 
        (randomPick === 'PAPER' && choice === 'ROCK') ||
        (randomPick === 'SCISSORS' && choice === 'PAPER')) {
        
        ++compScore;
        result = ('You lose! ' + randomPick + ' beats ' + choice + '<br><br>player score: ' + playScore + '<br>computer score' + compScore);
 
        if (compScore == 5) {
            result += '<br><br>You lost the game! Reload the page to play again.';
            disableButtons();
        };
    } else if (choice == randomPick) {
        result = ("It's a tie! You both chose " + choice
            + '<br><br>player score: ' + playScore +
            '<br>computer score: ' + compScore);
    } else {
        ++playScore
        result = ('You win! ' + choice + ' beats ' + randomPick
        + '<br><br>player score: ' + playScore + '<br>computer score: '
        + compScore);

        if (playScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again!';
            disableButtons();
        };
    }
        document.getElementById('result').innerHTML = result;
    return;
    };

buttons.forEach(button => {
    button.addEventListener('click');
    console.log(button.value);
})

buttons.forEach(button => {
    button.addEventListener('click', function() {
        rps(button.value);
    });
});
