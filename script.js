'use strict';
/*
console.log(document.querySelector('.message').textContent); // # for id
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const number = Math.random();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // function - event handler, only be called as soon as the event happens ('click')
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
