'use strict';

var quizcardContainer = document.querySelector('.quiz__container');
var allCards = document.querySelectorAll('.quizcard--card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');
var cardtext = document.getElementsByClassName('cardtext');

function initCards(card, index) {
  var newCards = document.querySelectorAll('.quizcard--card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });
  
  quizcardContainer.classList.add('loaded');
}

initCards();

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.quizcard--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(0deg)';
    } else {
      card.style.transform = 'translateX(0%) rotateY(-180deg)';
      card.style.zIndex = '99999';
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);

nope.onclick = function() {
  cardtext[0].classList.remove('invisible');
  }
