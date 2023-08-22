var aud0=new Audio('./0.mp3')
var aud1=new Audio('./1.mp3')
var aud2=new Audio('./2.mp3')
var aud3=new Audio('./3.mp3')

var a=0;
var b=0;
var c=0;
var d=0;
function play0(){
    if(a%2==0){
        aud0.play();
        a++;
    }
    else{
        aud0.pause();
        a++;
    }
}
function play1(){
    if(b%2==0){
        aud1.play();
        b++;
    }
    else{
        aud1.pause();
        b++;
    }
}
function play2(){
    if(c%2==0){
        aud2.play();
        c++;
    }
    else{
        aud2.pause();
        c++;
    }
}
function play3(){
    if(d%2==0){
        aud3.play();
        d++;
    }
    else{
        aud3.pause();
        d++;
    }
}




// var song0=new Audio()
// song0.src="../assist/audios/0.mp3"
// function play0(){
//     song0.play();
// }
// var song1=new Audio()
// song1.src="../assist/audios/1.mp3"
// function play1(){
//     song1.play();
// }
// var song2=new Audio()
// song2.src="../assist/audios/2.mp3"
// function play2(){
//     song2.play();
// }
// var song3=new Audio()
// song3.src="../assist/audios/3.mp3"
// function play3(){
//     song3.play();
// }
// var song4=new Audio()
// song4.src="../assist/audios/4.mp3"
// function play4(){
//     song4.play();
// }

// function pause1()
// {
//     song0.pause();
//     song1.pause();
//     song2.pause();
//     song3.pause();
//     song4.pause();
// }