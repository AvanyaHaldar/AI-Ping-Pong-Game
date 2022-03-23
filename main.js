function preload() {
    
}

function setup() {
    canvas = createCanvas(500, 450);
    canvas.center();
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.hide();   
    poseNet=ml5.poseNet(video,modelLoaded);
}


function draw() {
    image(video, 0, 0, 500, 450);
}

function modelLoaded() {
    console.log("Model Is Loaded");
}