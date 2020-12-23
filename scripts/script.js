var map = document.getElementsByClassName('map');
var helloscreen = document.getElementsByClassName('helloscreen');
var header = document.getElementsByClassName('headercontainer');
var container = document.getElementsByClassName('container');
var audio = document.getElementsByTagName('audio');
var paw = document.getElementsByClassName('paw');

map[2].onclick = function() {
    var audio = new Audio(); 
    audio.src = 'volume/ep1.mp3'; 
    audio.autoplay = true; 
    
    helloscreen[0].classList.add('invisible');
    map[3].classList.add('invisible');
    map[4].classList.add('zoom-in-plane');
    header[0].classList.add('invisible');
    
    setTimeout(function(){
        map[0].classList.add('zoom-in');
    }, 12000);

    setTimeout(function(){
        paw[0].classList.add('step__appear');
    }, 1000);

    setTimeout(function(){
        paw[1].classList.add('step__appear');
    }, 2000);

    setTimeout(function(){
        paw[2].classList.add('step__appear');
    }, 3000);

    setTimeout(function(){
        paw[3].classList.add('step__appear');
    }, 4000);

    setTimeout(function(){
        paw[4].classList.add('step__appear');
    }, 5000);

    setTimeout(function(){
        paw[5].classList.add('step__appear');
    }, 6000);

    setTimeout(function(){
        paw[6].classList.add('step__appear');
    }, 7000);

    setTimeout(function(){
        paw[7].classList.add('step__appear');
    }, 8000);

    setTimeout(function(){
        container[0].classList.add('invisible');
    }, 17000);

    setTimeout(function(){
        container[1].classList.remove('invisible');
    }, 17000);

    setTimeout(function(){
    var audio = new Audio(); 
    audio.src = 'volume/ep2.mp3'; 
    audio.autoplay = true;
    }, 44000);

    setTimeout(function(){
        container[1].classList.add('invisible');
    }, 43000);

    setTimeout(function(){
        container[2].classList.remove('invisible');
    }, 38000);

    setTimeout(function(){
        container[3].classList.remove('invisible');
    }, 44000);
}

map[0].onclick = function() {
    
    helloscreen[0].classList.add('flashmodal');
}

function soundClick() {
    var audio = new Audio(); 
    audio.src = 'ep1.mp3'; 
    audio.autoplay = true; 
}

