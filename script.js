
let songs = [
    {title:'Projeção', artist:'Projota', src:'music/Projeção.mp3', img:'./image/projecao.jpg'},
    {title:'Muleque Doido', artist:'Projota', src:'music/Muleque Doido.mp3', img:'./image/projecaoParaElas.jpg'},
    {title:'Nóiz', artist:'Projota', src:'./music/Nóiz.mp3', img:'./image/cartasAosMeus.jpg'}
];
// console.log(songs);


let music = document.querySelector('audio');
let indexMusic = 0;
let musicDuration = document.querySelector('.final');
let wallpaper = document.querySelector('.front-cover');
let musicName = document.querySelector('.name-song h2');
let artistName = document.querySelector('.artist ');


musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));


renderMusic(indexMusic);
playMusic();


document.querySelector('#play').addEventListener('click', playMusic);
document.querySelector('#pause').addEventListener('click', pauseMusic);
music.addEventListener('timeupdate', barUpdate);

document.querySelector('#back').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0){
        indexMusic = 2;
    }
    renderMusic(indexMusic);

});

document.querySelector('#next').addEventListener('click', () => {
    if (indexMusic > 2){
        indexMusic = 0;
    }
    indexMusic++;
    renderMusic(indexMusic);

});

function renderMusic(index){
    music.setAttribute('src', songs[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = songs[index].title;
        artistName.textContent = songs[index].artist;
        wallpaper.src = songs[index].img;
        musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));

    });

}


function playMusic(){
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

};


