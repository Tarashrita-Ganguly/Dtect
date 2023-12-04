status= "";
function preload() {
    img=loadImage('Bear.jpg');
}

function setup() {
canvas=createCanvas(640,640);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',ModelLoaded);
document.getElementById("status").innerHTML="Status: Detecting object";
}

function draw() {
    image(img,0,0,640,640);
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,610,610);
}

function ModelLoaded() {
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {
if(error) {
  console.log(error);
}else{
    console.log(results);
}
}