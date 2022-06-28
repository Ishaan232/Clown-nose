noseX=0;
noseY=0;
function preload(){
im=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    e=createCapture(VIDEO);
    e.size(300,300);
    e.hide();
    poseNet = ml5.poseNet(e, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized")
}
function gotPoses(result){
    if(result.length>0){
        console.log(result);
        noseX=result[0].pose.nose.x-15;
        noseY=result[0].pose.nose.y-15;
    }
}
function draw(){
    image(e, 0, 0, 300, 300);
    image(im, noseX, noseY, 30, 30);
}
function thing(){
    save('picture.png');
}