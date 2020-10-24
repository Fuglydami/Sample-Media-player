const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const color3 = document.querySelector(".color3")
const color4 = document.querySelector(".color4")
const color5 = document.querySelector(".color5")
const color6 = document.querySelector(".color6")
const color7 = document.querySelector(".color7")
const picture = document.querySelector("picture")

const sound = new Audio()

var isPlaying = false;

var currentPlayer = "playSound1";

const playPlay = () => {   
    sound.play();
    isPlaying = true;
    togglePicture() 
}

const togglePicture = () => picture.classList.toggle("block")

const playSound1 = ()=> {
    let track = ["audio/2Face_-_True_Love(9jabaze.com).mp3", "audio/Wizkid-Scatter-The-Floor.mp3", "audio/Wizkid-Slow-Whine.mp3", "audio/Wizkid+-+Turn+On+The+Lights.mp3", "audio/Wizkid+-+Zombie+Freestyle.mp3"];
    if(isPlaying == true & currentPlayer != "playSound1"){
        const randomSong = () => {
           return  (track[Math.floor(Math.random()*track.length)])  
        }     
        sound.src =  randomSong()
        playPlay()
    }
    else if(isPlaying & currentPlayer == "playSound1"){
        isPlaying = false;
        sound.pause();
    }
    else
    {
        const randomSong = () => {
            return  (track[Math.floor(Math.random()*track.length)])  
         }   
        sound.src = randomSong();
       playPlay()
    }
    
    currentPlayer = "playSound1";
}
const playSound2 = ()=> {
    let track = "audio/Avicii - Hey Brother.mp3";
    if(isPlaying & currentPlayer != "playSound2"){
        sound.src = track;
        playPlay()
    }
    else if(isPlaying & currentPlayer == "playSound2"){
        isPlaying = false;
        sound.pause();
    }
    else
    {
        sound.src = track;
        playPlay()
    }
    
    currentPlayer = "playSound2";
}
const playSound3 = ()=> {

    let track = "audio/Bullion Van Ft. Phyno , Runtown & St.mp3";
    if(isPlaying & currentPlayer != "playSound3"){
        sound.src = track;
        playPlay()
    }
    else if(isPlaying & currentPlayer == "playSound3"){
        isPlaying = false;
        sound.pause();
    }
    else
    {
        sound.src = track;
        playPlay()
    }
    
    currentPlayer = "playSound3";
}
const playSound4 = ()=> {
    let track = "audio/Ice_Prince_Ft_Wizkid_Olofofo(9jabaze.com).mp3"
     if(isPlaying & currentPlayer != "playSound4"){
        sound.src = track;
        playPlay()
    }
    else if(isPlaying & currentPlayer == "playSound4"){
        isPlaying = false;
        sound.pause();
    }
    else
    {
        sound.src = track;
        playPlay()
    }
    
    currentPlayer = "playSound4";
}
const playSound5 = ()=> {
    let track = "audio/09-lil_wayne-john_(feat._rick_ross).mp3"
     if(isPlaying & currentPlayer != "playSound5"){
        sound.src = track;
        playPlay()
    }
    else if(isPlaying & currentPlayer == "playSound5"){
        isPlaying = false;
        sound.pause();
    }
    else
    {
        sound.src = track;
        playPlay()
    }
    
    currentPlayer = "playSound5";
}
const playSound6 = ()=> {
    let track = "audio/Drake Ft. Wizkid   Kyla - One Dance (CDQ).mp3"
     if(isPlaying & currentPlayer != "playSound6"){
        sound.src = track;
        playPlay()
    }
    else if(isPlaying & currentPlayer == "playSound6"){
        isPlaying = false;
        sound.pause();
    }
    else
    {
        sound.src = track;
        playPlay()
    }
    
    currentPlayer = "playSound6";
}
const playSound7 = ()=> {
    let track = "audio/Kiss_Daniel_-_Jombo_illuminaija.com.mp3"
     if(isPlaying & currentPlayer != "playSound7"){
        sound.src = track;
        playPlay()
    }
    else if(isPlaying & currentPlayer == "playSound7"){
        isPlaying = false;
        sound.pause();
    }
    else
    {
        sound.src = track;
        playPlay()
    }
    
    currentPlayer = "playSound7";
}

color1.addEventListener("click", playSound1)
color2.addEventListener("click", playSound2)
color3.addEventListener("click", playSound3)
color4.addEventListener("click", playSound4)
color5.addEventListener("click", playSound5)
color6.addEventListener("click", playSound6)
color7.addEventListener("click", playSound7)