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
  let score = Number($score1.innerText);
  if(score >= endScore) {
    $score1.style.color = '#7EC0B2';
    $score2.style.color = '#F96D6C';
    $player1.disabled = true;
    $player2.disabled = true;
  }
});
$player2.addEventListener('click', () => {
  addScoreTo($score2);
  let score = Number($score2.innerText);
  if(score >= endScore) {
    $score2.style.color = '#7EC0B2';
    $score1.style.color = '#F96D6C';
    $player2.disabled = true;
    $player1.disabled = true;
  }
});

$reset.addEventListener('click', () => {
  $score1.innerText = '0';
  $score2.innerText = '0';
  $score1.style.color = 'black';
  $score2.style.color = 'black';
  $player2.disabled = false;
  $player1.disabled = false;
});