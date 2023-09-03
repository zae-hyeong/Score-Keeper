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

const addScoreTo = function(target) {
  let score = Number(target.innerText) + 1;
  target.innerText = score;
  console.log(score);
};

$player1.addEventListener('click', () => {
  addScoreTo($score1);
});
$player2.addEventListener('click', () => {
  addScoreTo($score2);
});

$reset.addEventListener('click', () => {
  $score1.innerText = '0';
  $score2.innerText = '0';
});