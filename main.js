noseX=0;
noseY=0;

function preload() {
    Lamont = loadImage('Lamont.png')

}

function setup() {
    canvas = createCanvas (300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -50;
        noseY = results[0].pose.nose.y -150;

        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose x =" + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log('PoseNet esta inicializado');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(Lamont, noseX, noseY, 100, 100);
}

function take_snapshot(){
    save('gnarpy.png')
}

