// Initialize player scores
let playerScore = 0;
let computerScore = 0;

// Play!
game();


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

function game() {

    // 5 loops
    for (let i = 0; i < 5; i++) {

        // Get selections
        const playerSelection = prompt('Choose rock, paper or scissors!')
        const computerSelection = getComputerChoice();

        // Play a round
        let result = playRound(playerSelection, computerSelection);

        // If draw, continue
        if (result.slice(0, 3) === 'Draw') {
            continue;
        }

        // If failure, increase computerScore
        else if (result.slice(0, 8) === 'You lose') {
            computerScore += 1;
        }

        // If victory, increase playerScore
        else if (result.slice(0, 7) === 'You win') {
            playerScore += 1;
        }
    }

    // Compare scores to check winner
    if (playerScore > computerScore) {
        return console.log(`You win! You beat the computer by ${playerScore} to ${computerScore}!`)
    }
    else if (computerScore > playerScore) {
        return console.log(`You lose! The computer beat you by ${computerScore} to ${playerScore}!`)
    }
    else if (computerScore === playerScore) {
        return console.log(`Draw! Both you and the computer scored ${playerScore}!`)
    }
}