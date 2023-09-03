let endScore = 3;
let isGameOVer = false;

const player1 = {
  score: 0,
  button: document.getElementById('player1'),
  scoreBoard: document.getElementById('score1')
}

const player2 = {
  score: 0,
  button: document.getElementById('player2'),
  scoreBoard: document.getElementById('score2')
}

const $reset = document.getElementById('reset');
const $roundSelector = document.getElementById('numOfRounds');

$reset.addEventListener('click', () => {
  resetScore();
  resetScoreBoard();
  disableButtons(false);
});

function resetScore() {
  player1.score = 0;
  player2.score = 0;
}

function resetScoreBoard() {
  player1.scoreBoard.innerText = '0';
  player2.scoreBoard.innerText = '0';
  player1.scoreBoard.style.color = 'black';
  player2.scoreBoard.style.color = 'black';
}

$roundSelector.addEventListener('change', () => {
  endScore = Number($roundSelector.options[$roundSelector.selectedIndex].value);
});

player1.button.addEventListener('click', () => {
  addScoreTo(player1);
  if(player1.score >= endScore) {
    selectWinnerAndLoser(player1.scoreBoard, player2.scoreBoard);
  }
});

player2.button.addEventListener('click', () => {
  addScoreTo(player2);
  if(player2.score >= endScore) {
    selectWinnerAndLoser(player2.scoreBoard, player1.scoreBoard);
  }
});

const addScoreTo = function(player) {
  player.score += 1;
  player.scoreBoard.innerText = player.score;
};

const selectWinnerAndLoser = function(winner, loser) {
  winner.style.color = '#7EC0B2';
  loser.style.color = '#F96D6C';
  disableButtons(true);
}

const disableButtons = function(flag) {
  if(flag) {
    player1.button.disabled = true;
    player2.button.disabled = true;
  } else {
    player1.button.disabled = false;
    player2.button.disabled = false;
  }
}