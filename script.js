let music = document.querySelector('audio');

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
}