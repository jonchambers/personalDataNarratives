var playing = false;
var T1000;
var playButton;

var t2image;

var canvas;


function preload(){
t2image = loadImage('images/t2robot.jpg');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  imageMode(CENTER);
  T1000 = createVideo(['videos/T1000Reforming.mp4']);
  T1000.position(150, 200);

  playButton = createButton('play');
  playButton.mousePressed(toggleVid); // attach button listener
  playButton.position(10, 35);

}



// plays or pauses the video depending on current state
function toggleVid() {
    if (playing) {
    T1000.pause();
    playButton.html('play');
  } else {
    T1000.loop();
    print(T1000.duration())

    playButton.html('pause');
  }
  playing = !playing;
}

function draw(){
  if (frameCount % 180 == 0) {
     T1000.time(random(T1000.duration()));
     //T1000.volume(random());
   }

  // print(T1000.time())
//background(0);
image(t2image,windowWidth/2, windowHeight/2, windowWidth, windowHeight);
//image(saraConnor, mouseX, mouseY, 20, 30);
//noCursor();
//cursor('images/saraConnor.png');
//T1000.position(mouseX, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
