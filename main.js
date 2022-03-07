leftmusic = ""
rightmusic = ""

function preload() {
 leftmusic = loadSound("frozen.mp3")
 rightmusic = loadSound("unstoppable.mp3")
}

function setup() {
	canvas =  createCanvas(600, 500)
	canvas.center()

    video = createCapture(VIDEO)
    video.hide()
    
    poseNet = ml5.poseNet(video, modeloaded)
    poseNet.on("pose" , gotposes)
}


function modeloaded() {
    console.log("model loaded")
  }

function draw() {
    image(video,0,0,600,500)
}


function gotposes(results) {
    if(results.length > 0){
        console.log(results)
        leftwristx = results[0].pose.leftWrist.x
        leftwristy = results[0].pose.leftWrist.y
   
        rightwristx = results[0].pose.rightWrist.x
        rightwristy = results[0].pose.rightWrist.y
    }
   }
