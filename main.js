rightWrist_x = 0;
rightWrist_y = 0;
scorerightWrist = 0;

function preload() {
    
}

function setup() {
    canvas = createCanvas(550, 448);
    canvas.center();
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.hide();   
    poseNet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}


function draw() {
    image(video, 0, 0, 550, 448);
}

function modelLoaded() {
    console.log("Model Is Loaded");
}

function gotPoses(result) {
	if (result.length > 0) {
		rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = " + rightWrist_x );
		console.log(result);
	}
}

function gotResult() {
    
}