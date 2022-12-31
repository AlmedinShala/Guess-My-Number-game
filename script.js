'use strict';
// console.log(document.querySelector('.message').textContent);
let score = 5;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ NUK KA NUMER!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 E QELLUAR!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = 5 - score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  if (guess + 2 === secretNumber || guess + 1 === secretNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 Keni Humbur!';
      document.querySelector('.score').textContent = 0;
      score = score;
    }
    document.querySelector('.message').textContent =
      '📉 Numer i vogel por afer jeni!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess - 2 === secretNumber || guess - 1 === secretNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 Keni Humbur!';
      document.querySelector('.score').textContent = 0;
      score = 0;
    }
    document.querySelector('.message').textContent =
      '📈 Numer i madh por afer jeni!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Numer i madh!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Keni Humbur!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Numer i vogel';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Keni humbur!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (score > 1) {
    document.querySelector('.message').textContent = '📈 Numer i madh!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '💥 Keni humbur!';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 5;
  document.querySelector('.message').textContent = 'Fillo lojen...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
