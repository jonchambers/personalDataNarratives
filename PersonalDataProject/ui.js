
let button

let canvas

function setup(){
canvas = createCanvas(windowWidth, windowHeight)
canvas.position(0,0);
canvas.style("z-index", "-1");


button = createButton('Change Background Color')


button.mousePressed(changeBG)


}


function changeBG(){
	background(random(255), random(255),random(255))
}

function draw(){


}