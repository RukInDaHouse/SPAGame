var map = document.getElementsByClassName('map');

  map[0].onclick = function() {
  map[3].classList.add('righttransition'),
  map[2].classList.add('righttransition'),
  map[1].classList.add('righttransition'),
  map[0].classList.add('full__screen');
}

map[1].onclick = function() {
  map[3].classList.add('righttransition2'),
  map[0].classList.add('lefttransition2'),
  map[2].classList.add('righttransition2'),
  map[1].classList.add('full__screen', 'rightshift2');
}

map[2].onclick = function() {
  map[3].classList.add('righttransition3'),
  map[1].classList.add('lefttransition'),
  map[0].classList.add('lefttransition'),
  map[2].classList.add('full__screen', 'rightshift');
}

map[3].onclick = function() {
  map[0].classList.add('lefttransition'),
  map[2].classList.add('lefttransition'),
  map[1].classList.add('lefttransition'),
  map[3].classList.add('full__screen', 'rightshift3');
}

arrow.onclick = function() {
  map[0].classList.add('lefttransition'),
  map[2].classList.add('lefttransition'),
  map[1].classList.add('lefttransition'),
  map[3].classList.add('full__screen', 'rightshift3');
}