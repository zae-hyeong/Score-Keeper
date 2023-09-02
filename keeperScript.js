const $player1 = document.getElementById('player1');
const $player2 = document.getElementById('player2');
const $reset = document.getElementById('reset');

const $score1 = document.getElementById('score1');
const $score2 = document.getElementById('score2');

const $roundSelector = document.getElementById('numOfRounds');

let endScore = 3;

$roundSelector.addEventListener('change', () => {
  endScore = Number($roundSelector.options[$roundSelector.selectedIndex].value);
  console.log(`value : ${endScore}`);
});

function addScoreTo(target) {
  
}

$player1.addEventListener('click', () => {
  let score = Number($score1.innerText) + 1;
  $score1.innerText = score;
  console.log(score);
});
$player2.addEventListener('click', () => {
  let score = Number($score2.innerText) + 1;
  $score2.innerText = score;
  console.log(score);
});

