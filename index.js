const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let progress = document.getElementById("progress");

const songs = [
    {
    name: "mukti-1",
    title: "Oh Jane Ja",
    artist: "Muktinath Rajbanshi",
    },
    {
    name: "mukti-2",
    title: "Bachke Jara",
    artist: "Muktinath Rajbanshi",
    },
   {
    name: "mukti-3",
    title: "Labon Ko",
    artist: "Muktinath Rajbanshi",
    },
    {
    name: "mukti-4",
    title: "Qui Raton Ko",
    artist: "Muktinath Rajbanshi",
    }
]


let isPlaying = false;

// for play function 
 playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");   
}

// for pause functionality 

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");   
}

play.addEventListener("click", () => {

    isPlaying ? pauseMusic() : playMusic();
})

// changing the music data 

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/"+songs.name+ ".mp3";
    img.src = "images/"+ songs.name + ".webp";
}

songIndex = 0;
// loadSong(songs[3]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

// progress js work 

music.addEventListener("timeupdate", (event) => {
    // console.log(event);
    const {currentTime, duration} = event.srcElement;
    console.log(currentTime);
    console.log(duration);
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;
       
});

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
loadSong(songs[0]);


