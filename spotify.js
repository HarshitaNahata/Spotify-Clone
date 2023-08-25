console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('diljhoom.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "Dil Jhoom",filePath: "diljhoom.mp3",coverPath:"diljhoom_cover.png"},
    {songName: "Tera Yaar Hoon Main",filePath: "terayaarhoonmain.mp3",coverPath:"tera_yaar_cover.jpg"},
    {songName: "Chahu Mai ya na",filePath: "chahumaiyana.mp3",coverPath:"chahu_mai_cover.png"},
    {songName: "Hawayein",filePath: "hawayein.mp3",coverPath:"hawayein_cover.jpg"},
    {songName: "Radha",filePath: "radha.mp3",coverPath:"radha_cover.jpg"},
    {songName: "Apna Bana Le",filePath: "apnabanale.mp3",coverPath:"apna_bana_le_cover.png"},
    {songName: "Woh Din",filePath: "wohdin.mp3",coverPath:"woh_din_cover.jpeg"},
    {songName: "Tum Kya Mile",filePath: "tumkyamile.mp3",coverPath:"tum_kya_mile_cover.jpg"},
    {songName: "Shayad",filePath: "shayad.mp3",coverPath:"shayad_cover.jpg"},
    {songName: "Humdard",filePath: "humdard.mp3",coverPath:"humdard_cover.jpg"},
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audioElement.play();

//Play and pause event
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTi0me<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//Listen events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;

})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    //masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    //masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})