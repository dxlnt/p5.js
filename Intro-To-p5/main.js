function preload(){

}

var colour="";
var video=createCapture(VIDEO);  
video.hide(); 

function setup(){
    var canvas=createCanvas(600,480);
    canvas.position(350,300); 
    
}

function draw(){
    image(video,0,0,110,250);
    tint(colour);
}

function takesnap(){
    save('tinted_img.png');
}
function filtertint(){
        colour=document.getElementById("filter").value;
}

