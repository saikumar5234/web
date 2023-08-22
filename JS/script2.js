//creating an array for all audios
// var songs=[]
// songs[0]=new Audio('../assist/audios/0.mp3');
// songs[1]=new Audio('../assist/audios/1.mp3');
// songs[2]=new Audio('../assist/audios/2.mp3');
// songs[3]=new Audio('../assist/audios/3.mp3');
// songs[4]=new Audio('../assist/audios/4.mp3');
// // var val1;


// // var returnPlay=0;
// function play0(){
//     var j;
//     for(j=0;j<songs.length;j++){
//         songs[j].pause();
//     }
//    // songs[0].play();
    
//     if(songs[0].pause()){
//         songs[0].play();
//     }
//     else{
//         songs[0].pause();
//     }

// }


var songs = ["../assist/audios/0.mp3", "../assist/audios/1.mp3", "../assist/audios/2.mp3", "../assist/audios/3.mp3", "../assist/audios/4.mp3", "../assist/audios/5.mp3", "../assist/audios/6.mp3", "../assist/audios/7.mp3", "../assist/audios/8.mp3", "../assist/audios/9.mp3", "../assist/audios/10.mp3", "../assist/audios/11.mp3", "../assist/audios/12.mp3", "../assist/audios/13.mp3", "../assist/audios/14.mp3", "../assist/audios/15.mp3", "../assist/audios/16.mp3", "../assist/audios/17.mp3", "../assist/audios/18.mp3", "../assist/audios/19.mp3"];
            var audio = new Audio();
            var currentSongIndex = 0;
            var currentSongSource = songs[currentSongIndex];
            audio.src = currentSongSource;
            
            function playSong() {
            audio.play();
            }
            function pauseSong() {
            audio.pause();
            }
            function nextSong() {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            currentSongSource = songs[currentSongIndex];
            audio.src = currentSongSource;
            audio.play();
            }
            function previousSong() {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            currentSongSource = songs[currentSongIndex];
            audio.src = currentSongSource;
            audio.play();
            }















function albumk() {
    document.getElementById("album-cont").style.display="none"
    document.getElementById("songs-cont").style.display="inline"
    document.getElementById("play-cont").style.display="flex"
}

function back(){
    document.getElementById("songs-cont").style.display="none"
    document.getElementById("album-cont").style.display="flex"
    document.getElementById("songs-orange").style.display="none"
    document.getElementById("songs-awara").style.display="none"
    document.getElementById("songs-ashique").style.display="none"
}
function albumO() {
    document.getElementById("album-cont").style.display="none"
    document.getElementById("songs-orange").style.display="inline"
    document.getElementById("play-cont").style.display="flex"
}

function albumA() {
    document.getElementById("album-cont").style.display="none"
    document.getElementById("songs-awara").style.display="inline"
    document.getElementById("play-cont").style.display="flex"
}

function albumA2() {
    document.getElementById("album-cont").style.display="none"
    document.getElementById("songs-ashique").style.display="inline"
    document.getElementById("play-cont").style.display="flex"
}
