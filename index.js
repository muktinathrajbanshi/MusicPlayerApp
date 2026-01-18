const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

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
    title: "Qui Raton Ko Main",
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

    isPlaying ? pauseMusic() : playMusic()
})


