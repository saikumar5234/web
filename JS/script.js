var aud0=new Audio('../assist/audios/0.mp3')
var aud1=new Audio('../assist/audios/1.mp3')
var aud2=new Audio('../assist/audios/2.mp3')
var aud3=new Audio('../assist/audios/3.mp3')
var aud4=new Audio('../assist/audios/4.mp3')
var aud5=new Audio('../assist/audios/5.mp3')
var aud6=new Audio('../assist/audios/6.mp3')
var aud7=new Audio('../assist/audios/7.mp3')
var aud8=new Audio('../assist/audios/8.mp3')
var aud9=new Audio('../assist/audios/9.mp3')
var aud10=new Audio('../assist/audios/10.mp3')
var aud11=new Audio('../assist/audios/11.mp3')
var aud12=new Audio('../assist/audios/12.mp3')
var aud13=new Audio('../assist/audios/13.mp3')
var aud14=new Audio('../assist/audios/14.mp3')
var aud15=new Audio('../assist/audios/15.mp3')
var aud16=new Audio('../assist/audios/16.mp3')
var aud17=new Audio('../assist/audios/17.mp3')
var aud18=new Audio('../assist/audios/18.mp3')
var aud19=new Audio('../assist/audios/19.mp3')



var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var n=0;
var m=0;
var k=0;
var o=0;
var p=0;
var q=0;
var r=0;
var s=0;
var t=0;
var u=0;

var val1;
var returnPlay=0;
function play0(){
    document.getElementById("play-img").style.display="inline"
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(a%2==0){
        returnPlay=0;
        aud0.play();
        var dur=aud0.duration;
        var min=Math.floor(dur/60)
        var sec=Math.floor(dur-min*60)
        var time=`${min}:${sec}`
        console.log(time)
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Bekhayali").style.color="rgb(23, 174, 23)";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud0.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Bekhayali").style.color="white";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")

    }
}
function play1(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(b%2==0){
        returnPlay=1;
        aud1.play();
        var dur=aud1.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Tujhe").style.color="rgb(23, 174, 23)";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud1.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tujhe").style.color="white";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
  
}
function play2(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(c%2==0){
        returnPlay=2;
        aud2.play();
        var dur=aud2.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Mere").style.color="rgb(23, 174, 23)";
        c++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud2.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Mere").style.color="white";
        c++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
}
function play3(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(d%2==0){
        returnPlay=3;
        aud3.play();
        var dur=aud3.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Pehla").style.color="rgb(23, 174, 23)";
        d++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud3.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Pehla").style.color="white";
        d++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
}
function play4(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(e%2==0){
        returnPlay=4;
        aud4.play();
        var dur=aud4.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Tera").style.color="rgb(23, 174, 23)";
        e++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud4.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tera").style.color="white";
        e++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
}
function play5(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(b%2==0){
        returnPlay=5;
        aud5.play();
        var dur=aud5.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Tujhe").style.color="rgb(23, 174, 23)";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud5.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tujhe").style.color="white";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
  
}
function play6(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(b%2==0){
        returnPlay=6;
        aud6.play();
        var dur=aud6.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Tujhe").style.color="rgb(23, 174, 23)";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud6.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tujhe").style.color="white";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
  
}
function play7(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(b%2==0){
        returnPlay=7;
        aud7.play();
        var dur=aud7.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Tujhe").style.color="rgb(23, 174, 23)";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud1.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tujhe").style.color="white";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
  
}
function play8(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(b%2==0){
        returnPlay=8;
        aud8.play();
        var dur=aud8.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Tujhe").style.color="rgb(23, 174, 23)";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud8.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tujhe").style.color="white";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
  
}
function play9(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(b%2==0){
        returnPlay=9;
        aud9.play();
        var dur=aud9.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Tujhe").style.color="rgb(23, 174, 23)";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud9.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tujhe").style.color="white";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
  
}
function play10(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(b%2==0){
        returnPlay=10;
        aud10.play();
        var dur=aud10.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Tujhe").style.color="rgb(23, 174, 23)";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud10.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tujhe").style.color="white";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
  
}
function play11(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(b%2==0){
        returnPlay=11;
        aud11.play();
        var dur=aud11.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Tujhe").style.color="rgb(23, 174, 23)";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud11.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tujhe").style.color="white";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
  
}
function play12(){
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(b%2==0){
        returnPlay=12;
        aud12.play();
        var dur=aud12.duration;
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Tujhe").style.color="rgb(23, 174, 23)";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud12.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tujhe").style.color="white";
        b++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
    }
  
}
function play13(){
    document.getElementById("play-img").style.display="inline"
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(a%2==0){
        returnPlay=0;
        aud13.play();
        var dur=aud13.duration;
        var min=Math.floor(dur/60)
        var sec=Math.floor(dur-min*60)
        var time=`${min}:${sec}`
        console.log(time)
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Bekhayali").style.color="rgb(23, 174, 23)";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud13.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Bekhayali").style.color="white";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")

    }
}
function play14(){
    document.getElementById("play-img").style.display="inline"
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(a%2==0){
        returnPlay=0;
        aud14.play();
        var dur=aud14.duration;
        var min=Math.floor(dur/60)
        var sec=Math.floor(dur-min*60)
        var time=`${min}:${sec}`
        console.log(time)
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Bekhayali").style.color="rgb(23, 174, 23)";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud14.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Bekhayali").style.color="white";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")

    }
}
function play15(){
    document.getElementById("play-img").style.display="inline"
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(a%2==0){
        returnPlay=0;
        aud15.play();
        var dur=aud15.duration;
        var min=Math.floor(dur/60)
        var sec=Math.floor(dur-min*60)
        var time=`${min}:${sec}`
        console.log(time)
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Bekhayali").style.color="rgb(23, 174, 23)";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud15.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Bekhayali").style.color="white";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")

    }
}
function play16(){
    document.getElementById("play-img").style.display="inline"
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(a%2==0){
        returnPlay=0;
        aud16.play();
        var dur=aud16.duration;
        var min=Math.floor(dur/60)
        var sec=Math.floor(dur-min*60)
        var time=`${min}:${sec}`
        console.log(time)
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Bekhayali").style.color="rgb(23, 174, 23)";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud16.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Bekhayali").style.color="white";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")

    }
}
function play17(){
    document.getElementById("play-img").style.display="inline"
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(a%2==0){
        returnPlay=0;
        aud17.play();
        var dur=aud17.duration;
        var min=Math.floor(dur/60)
        var sec=Math.floor(dur-min*60)
        var time=`${min}:${sec}`
        console.log(time)
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Bekhayali").style.color="rgb(23, 174, 23)";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud17.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Bekhayali").style.color="white";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")

    }
}
function play18(){
    document.getElementById("play-img").style.display="inline"
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(a%2==0){
        returnPlay=0;
        aud18.play();
        var dur=aud18.duration;
        var min=Math.floor(dur/60)
        var sec=Math.floor(dur-min*60)
        var time=`${min}:${sec}`
        console.log(time)
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Bekhayali").style.color="rgb(23, 174, 23)";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud18.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Bekhayali").style.color="white";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")

    }
}
function play19(){
    document.getElementById("play-img").style.display="inline"
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(a%2==0){
        returnPlay=0;
        aud19.play();
        var dur=aud19.duration;
        var min=Math.floor(dur/60)
        var sec=Math.floor(dur-min*60)
        var time=`${min}:${sec}`
        console.log(time)
        document.getElementById("timeline").style.animation=`musicTimeLine ${dur}s linear`
        document.getElementById("Bekhayali").style.color="rgb(23, 174, 23)";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause")
    }
    else{
        aud19.pause();
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Bekhayali").style.color="white";
        a++;
        val1=document.getElementById("buttonVal")
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")

    }
}
function pause1()
{
    var val=document.getElementById("buttonVal").value
     val1=document.getElementById("buttonVal")
    if(val=="Play")
    {
        for(j=0;j<arrsongs.length;j++){
            arrsongs[j].pause();
        }
        document.getElementById("timeline").style.animationPlayState=`running`
        document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
        val1.setAttribute("value","pause");
    //    console.log("p");
        arrsongs[returnPlay].play();
        
    }
    else if(val=="pause"){
        document.getElementById("p2").src="../assist/logos/play.png"
        val1.setAttribute("value","Play")
        document.getElementById("timeline").style.animationPlayState=`paused`
        document.getElementById("Tera").style.color="white";
        // console.log("N");
      
        for(j=0;j<arrsongs.length;j++){
            arrsongs[j].pause();
        }
    }
}
var arrsongs=[aud0,aud1,aud2,aud3,aud4,aud5,aud6,aud7,aud8,aud9,aud10,aud11,aud12,aud13,aud14,aud15,aud16,aud17,aud18,aud19]
var i=0,j=0;
function nextSong(){
    val1=document.getElementById("buttonVal")
    document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
    val1.setAttribute("value","pause")
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].currentTime=0;
    }
    console.log("activated");
    for(j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    if(i==0){
        arrsongs[i].play();
        console.log(i);
       
    }
    else if(i>0 && i<arrsongs.length){
        arrsongs[i].play();
        console.log(i);
    }
    else if(i==arrsongs.length){
        i=0;
        arrsongs[i].play();
        console.log(i);
    }
    i++;
}

function prevSong(){
    val1=document.getElementById("buttonVal")
    document.getElementById("p2").src="../assist/logos/Black Pause Button Symbol.png"
    val1.setAttribute("value","pause")
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].currentTime=0;
    }
    console.log("activated");
    for(var j=0;j<arrsongs.length;j++){
        arrsongs[j].pause();
    }
    i--;
    if(i>0 && i<arrsongs.length-1){
        arrsongs[i].play();
        console.log(i);
    }
    else if(i==0){
        arrsongs[i].play();
        console.log(i);
    }
    else if(i==-1){
        i=arrsongs.length-1;
        arrsongs[i].play();
        console.log(i);
    }
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





















