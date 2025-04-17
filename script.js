const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (playerChoice === computerChoice) {
    result = `It's a draw! You both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
  }

  document.getElementById('result').textContent = result;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

// Start music automatically (some browsers may block autoplay)
window.addEventListener('click', () => {
  const music = document.getElementById("bg-music");
  if (music.paused) music.play();
}, { once: true });
