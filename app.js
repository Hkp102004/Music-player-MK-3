let currentMusic = 0;

const music = document.querySelector('#audio');
const seekbar = document.querySelector('.seek-bar');
const playbtn = document.getElementById('play');
const pausebtn = document.getElementById('pause');
const nexttbn = document.getElementById('next');
const prevbtn = document.getElementById('back');
const songname = document.querySelector('.name');

console.log("Yes I'm working properly without any bugs");

// function songplay() {
//     if(playbtn.style.opacity == "1"){  deleting this so I can make a new logic for this but also keeping it because it helped me understand at first
//         playbtn.style.opacity = "0";
//         pausebtn.style.opacity = "1";
//         playbtn.style.pointerEvents = "none";
//         pausebtn.style.pointerEvents = "auto";
//         music.play();
//     }
//     else{
//         playbtn.style.opacity = "1";
//         pausebtn.style.opacity = "0";
//         playbtn.style.pointerEvents = "auto";
//         pausebtn.style.pointerEvents = "none";
//         music.pause();
//     }
// }
playbtn.addEventListener("click", ()=>{
    if(music.paused)
    {
        audio.play();
        playbtn.src="photos/pause.png"; //changes the image without having to do the whole opacity thing
    }
    else
    {
        music.pause();
        playbtn.src="photos/play-button.png"; //will change the photo again to default
    }
})

const setMusic = (i) => {
    seekbar.value = 0;
    let song = songs[i];
    cureentMusic = i;
    music.src = song.path;
    songname.innerHTML = song.name;
    seekbar.max = music.duration;
}

setMusic(0);

// setInterval(() => {
//     seekbar.value = music.currentTime;
// },500);


// seekbar.addEventListener('change', () => {
//     music.currentTime = seekbar.value;
// });

music.addEventListener("timeupdate", ()=>{
    let progress = (music.currentTime/music.duration)*100;
    seekbar.value=progress;
});

seekbar.addEventListener("input",()=>{
    music.currentTime = (seekbar.value/100)*music.duration;
});



const playMusic = () => {
    music.play();
    playbtn.src="photos/play-button.png";
    // playbtn.style.opacity = "0";
    // pausebtn.style.opacity = "1";
    // playbtn.style.pointerEvents = "none";
    // pausebtn.style.pointerEvents = "auto";
}

nexttbn.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    }else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
    playbtn.src="photos/pause.png";
})

prevbtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = songs.length - 1;
    }else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
    playbtn.src="photos/pause.png";
})

music.addEventListener("ended",()=>{
    currentMusic++;
    if(currentMusic >= music.length)
    {
        currentMusic=0;
    }
    setMusic(currentMusic); //this line is the main reason for next song, remeber it at all cost
    playMusic();
    playbtn.src="photos/pause.png";
})

const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 300,
    height: 150,
    frame: false, // no title bar
    transparent: true, // makes background invisible
    alwaysOnTop: true,
  });

  win.loadFile('music_player.html');
});



console.log("Yes everything is still working");
