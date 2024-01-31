//rect and triangle variables
let rectH = 200
let triPoint = 300


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  
}

function draw() {
  if(mouseX > 300 && mouseY>300){
     background(150);
     }else{
       background(150, 0, 0);
     }
  
  strokeWeight(20)
  point(100, 100)
  
  stroke(50, 45, 200)
  line(100,50, 50, 40)
  
  //rect styles
  stroke(61, 204, 219)
  fill(200)
  
  //rect styles
  //if the mouse is pressed, then change the rect stroke and height
  if(mouseIsPressed){
    rectH = 100
    stroke(61, 204, 219)
  }else{
    rectH = 200
    stroke(61, 204, 0)
  }
  
  rect(200, 500, 100, rectH)
  
  //sun shape styles
  //noStroke()
  stroke(61, 204, 120)
  fill(222, 141, 120)
  triPoint
  ellipse(200, 200, 100, 100)

  //triangle styles
  strokeWeight(10)
  stroke(61, 204, 219)
  noFill()
  
  //if any key is pressed change triangle x1 value
  if(keyIsPressed){
    triPoint = 100
  }else{
    triPoint = 300
  }
  triangle(triPoint, 50, 500, 200, 300, 150)
  
}