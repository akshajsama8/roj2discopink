var empty = False
song = "";

function setup() {
    
    canvas = createCanvas(550, 550);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function preload(){
    song = loadSound("music.mp3","pink.mp3");
}

function draw(){
    image(video, 0, 0, 550, 550);

}

function play1(){
    song.play("music.mp3");  
}

function play2(){
    song.play("pink.mp3")
}
