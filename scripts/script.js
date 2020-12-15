var map = document.getElementsByClassName('map');
var helloscreen = document.getElementsByClassName('helloscreen');
var header = document.getElementsByClassName('headercontainer');

    map[2].onclick = function() {
    helloscreen[0].classList.add('invisible'),
    map[0].classList.add('zoom-in'),
    map[3].classList.add('invisible');
    map[4].classList.add('zoom-in-plane');
    header[0].classList.add('invisible');
}

    map[0].onclick = function() {
    helloscreen[0].classList.add('flashmodal');
}