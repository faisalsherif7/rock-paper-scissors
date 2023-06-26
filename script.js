// Initialize player scores
let playerScore = 0;
let computerScore = 0;
let result = 'string';

const div = document.querySelector('.results');
const currentResult = document.querySelector('.currentResult');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');

const reload = document.createElement('button')
reload.style.display = 'block';
reload.textContent = 'Refresh to play again';



buttons.forEach(button => button.addEventListener('click', (e) => {
    result = playRound(e.target.classList.value, getComputerChoice());
    currentResult.textContent = result;
    updateScore();
    score.textContent = `Player score - ${playerScore} || Computer score - ${computerScore}`;
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            div.textContent = `You win! You beat the computer by ${playerScore} to ${computerScore}!`
        }
        else if (computerScore > playerScore) {
            div.textContent = `You lose! The computer beat you by ${computerScore} to ${playerScore}!`
        }

        // Disable R/P/S buttons and show refresh button
        buttons.forEach(button => button.disabled = true);
        div.appendChild(reload);

        // Reset scores after displaying results
        playerScore = 0;
        computerScore = 0;
    }
}));

reload.addEventListener('click', () => location.reload());

function updateScore() {
    // If draw, continue
    if (result.slice(0, 3) === 'Draw') {
        return;
    }

    // If failure, increase computerScore
    else if (result.slice(0, 8) === 'You lose') {
        computerScore += 1;
        return;
    }

    // If victory, increase playerScore
    else if (result.slice(0, 7) === 'You win') {
        playerScore += 1;
        return;
    }
}


function getComputerChoice() {
    var strings = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
  }

function playRound(playerSelection, computerSelection) {
    // If player chose rock
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return 'Draw! Rock and Rock';
        }
        else if (computerSelection === 'paper') {
            return 'You lose! Paper beats Rock';
        }
        else if (computerSelection === 'scissors') {
            return 'You win! Rock beats Scissors';
        }
    }

    // Else if player chose paper
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win! Paper beats Rock';
        }
        else if (computerSelection === 'paper') {
            return 'Draw! Paper and Paper';
        }
        else if (computerSelection === 'scissors') {
            return 'You lose! Scissors beat Paper';
        }
    }

    // Else if player chose scissors
    else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats Scissors';
        }
        else if (computerSelection === 'paper') {
            return 'You win! Scissors beat Paper';
        }
        else if (computerSelection === 'scissors') {
            return 'Draw! Scissors and Scissors';
        }
    }
}



