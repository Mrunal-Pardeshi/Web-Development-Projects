

let currentSong = new Audio();
let songs;
let currentFolder;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getSongs(folder) {
    currentFolder = folder
    let a = await fetch(`http://127.0.0.1:3000/${currentFolder}/`)
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${currentFolder}/`)[1])
        }
    }

// Show all the songs in the playlist
let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
songUL.innerHTML = ""
for (const song of songs) {
    songUL.innerHTML = songUL.innerHTML + `<li>
    <img src="img/music.svg" alt="Music Icon">
                        <div class="info">
                            <div>${song.replaceAll("%20", (" "))}</div>
                             
                        </div>
                        <div class="playNow">
                            <span>Play Now</span>
                            <img src="img/playnow.svg" alt="Play Icon">
                        </div>
    </li>`
}

// Attach an event listener to each song
Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
    e.addEventListener("click", element => {
        playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    })
})


}

const playMusic = (track, pause = false) => {
    currentSong.src = `/${currentFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00.00 / 00.00"
}

async function displayAlbums() { 
    let a = await fetch(`/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if(e.href.includes("/songs")&& !e.href.includes(".htaccess")){
            let folder = e.href.split("/").slice(-2)[0]
            // Get the metadata from the folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json();
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="${folder}" class="card">
                        <div class="play">
                            <img src="img/play.svg" alt="Play Button">
                        </div>
                        <img src="/songs/${folder}/cover.jpeg" alt="">
                        <h2>${response.title}</h2>
                        <p>
                        ${response.description}
                        </p>
                    </div>`
        }
    }
    
    
}


async function main() {
    // Load the playlist when the card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e=>{
        e.addEventListener("click", async item=>{
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)  
        })
    })
    
      // Attach an event listener to play, next and prev buttons in playbar
      play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "img/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "img/playsong.svg"
        }
    })
    
     // Add an event listener to seekbar
     document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%"
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    })
    
    // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })
    
    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = -120 + "%"
    })
    
    
    // Add an event listener to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to ", e.target.value, "/100")
        currentSong.volume = parseInt(e.target.value) / 100
    })
    
    // Add an event listener to mute
    document.querySelector(".volume>img").addEventListener("click", (e)=>{
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }
    })
    
    // Add an event listener to previous button
    previous.addEventListener("click", () => {
      console.log("Previous Clicked")
      let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
      if ((index - 1) >= 0) {
          playMusic(songs[index - 1])
      }
    })
    
    // Add an event listener to next button
    next.addEventListener("click", () => {
      console.log("Next Clicked")
      let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
      if ((index + 1) < songs.length) {
          playMusic(songs[index + 1])
      }
    })
    // Get the songs list
    await getSongs("songs/Agneepath")
    playMusic(songs[0], true)
    
    displayAlbums()
    


    
    // Listen for time update event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })
    
    
    
}

main()