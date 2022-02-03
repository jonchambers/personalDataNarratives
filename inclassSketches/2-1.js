
let ellipseX = 500;

function setup(){
  createCanvas(windowWidth, windowHeight)
  print(ellipseX)
}



function draw(){

  if(mouseIsPressed == true){
    background(40, 100, 100);
  }else{
    background(180, 55, 200)
  }

  ellipse(ellipseX, mouseY, 100);

  if(mouseX > windowWidth/2){
    fill(30, 200, 150);
  }else{
    fill(200, 40, 100)
  }


}