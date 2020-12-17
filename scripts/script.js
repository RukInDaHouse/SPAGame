var map = document.getElementsByClassName('map');
var helloscreen = document.getElementsByClassName('helloscreen');
var header = document.getElementsByClassName('headercontainer');
var container = document.getElementsByClassName('container');
var audio = document.getElementsByTagName('audio');

map[2].onclick = function() {
    
    helloscreen[0].classList.add('invisible');
    map[0].classList.add('zoom-in');
    map[3].classList.add('invisible');
    map[4].classList.add('zoom-in-plane');
    header[0].classList.add('invisible');
    function soundClick() {
    var audio = new Audio(); 
    audio.src = './volume/ep1.mp3'; 
    audio.autoplay = true; 
}
    setTimeout(function(){
    	container[0].classList.add('invisible');
    }, 5000);
    setTimeout(function(){
    	container[1].classList.remove('invisible');
    }, 5000);

    setTimeout(function(){
    	container[1].classList.add('invisible');
    }, 38000);
	setTimeout(function(){
    	container[2].classList.remove('invisible');
    }, 38000);
}

map[0].onclick = function() {
    
    helloscreen[0].classList.add('flashmodal');
}

