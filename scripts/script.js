var map = document.getElementsByClassName('map');
var helloscreen = document.getElementsByClassName('helloscreen');

    map[2].onclick = function() {
    helloscreen[0].classList.add('invisible'),
    map[0].classList.add('zoom-in'),
    map[3].classList.add('zoom-in-plane');
}

    map[0].onclick = function() {
    helloscreen[0].classList.add('flashmodal');
}