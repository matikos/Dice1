const dice = document.getElementById('dice');
const die1 = document.getElementById('die1');
const die2 = document.getElementById('die2');
const die3 = document.getElementById('die3');
const die4 = document.getElementById('die4');
const die5 = document.getElementById('die5');
const die6 = document.getElementById('die6');
const allDice = [die1, die2, die3, die4, die5, die6];
const butn1 = document.getElementById('begin');
const butn2 = document.getElementById('again');

const player1 = document.getElementById('player1');
const score = document.getElementById('score');
let totalScore = 0;


  butn1.addEventListener('click', () => {
  for (let i = 0; i < allDice.length; i++) {
    allDice[i].style.display = "none";
  };
  
  let roll = Math.floor((Math.random() * 6 )+ 1);
  let nextDie = allDice[(roll - 1)];
  if (nextDie.style.display == 'none') {
    nextDie.style.display = 'block';
   
  } else {
    nextDie.style.display = 'none';
   
  };
  totalScore += roll;
  score.textContent = `your score: ${totalScore}`;

  if (roll == 1) {
    player1.textContent = 'YOU LOOSE!';
    butn1.style.display = 'none';
    butn2.style.display = 'block';
  } else if (totalScore > 20) {
    butn1.style.display = 'none';
    butn2.style.display = 'block';
    player1.textContent = 'YOU WIN!';
  };
  
  console.log(roll);
  
  });
 


butn2.addEventListener('click', () => {
  for (let i = 0; i < allDice.length; i++) {
    allDice[i].style.display = "none";
  };
    butn1.style.display = 'block';
    butn2.style.display = 'none';
    player1.textContent = 'PLAYER ONE';
    totalScore = 0;
    score.textContent = `your score: ${totalScore}`;
});
