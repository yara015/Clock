let min=document.getElementById("min");
let sec=document.getElementById("sec");
let hrs=document.getElementById("hrs");
let ampm=document.getElementById("ampm");
let hh=document.getElementById("hh");
let mh=document.getElementById("mh");
let sh=document.getElementById("sh");
const updateTime=()=>{
     let currentTime=new Date();

    let secToDeg=currentTime.getSeconds()*6;
    let minToDeg=currentTime.getMinutes()*6;
    let hrToDeg=currentTime.getHours()*30+minToDeg/12;
    sh.style.transform=`rotate(${secToDeg}deg)`;
     mh.style.transform=`rotate(${minToDeg}deg)`;
     hh.style.transform=`rotate(${hrToDeg}deg)`;



    min.innerHTML=(currentTime.getMinutes()<10?"0":'')+currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":'')+currentTime.getSeconds();
    let h=currentTime.getHours();
    if(h>12){
        h=h-12;
        ampm.innerHTML="PM";
    }
    hrs.innerHTML=(h<10?"0":'')+h;

    let sound=new Audio("sound.mp3");
    sound.play();
};
setInterval(updateTime,1000);

