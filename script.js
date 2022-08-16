let music = document.querySelector('audio');

let musicDuration = document.querySelector('.final');
let wallpaper = document.querySelector('.front-cover');
let musicName = document.querySelector('.name-song h2');
let artistName = document.querySelector('.artist p');

musicDuration.textContent = secondsToMinutes (Math.floor(music.duration));

document.querySelector('#play').addEventListener('click', playerMusic);
document.querySelector('#pause').addEventListener('click', pauseMusic);
music.addEventListener('timeupdate', barUpdate);


function playerMusic(){
    music.play()
    document.querySelector('#pause').style.display = 'block';
    document.querySelector('#play').style.display = 'none';
}

function pauseMusic(){
    music.pause();
    document.querySelector('#pause').style.display = 'none';
    document.querySelector('#play').style.display = 'block';

}

function barUpdate(){
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let elapsed = document.querySelector('.initial');
    elapsed.textContent = secondsToMinutes (Math.floor(music.currentTime));
}

function secondsToMinutes(seconds){
    let minutesField = Math.floor(seconds / 60);
    let secondsField = seconds % 60;
    if(secondsField < 10){
        secondsField = '0' + secondsField
    }

    return minutesField+ ':' + secondsField;

}