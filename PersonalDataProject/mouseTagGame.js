let paddleWidth= 400

let furby

let furbyX
let furbyY

let xSpeed = 3
let ySpeed = 3


let score = 0

let mouseDist

let startBool = true
let winBool = false


function preload(){
	furby = loadImage('furby.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)

	furbyX = windowWidth/2
	furbyY = windowHeight/2

	rectMode(CENTER)


}


function draw(){

	if(startBool == true){
		startGame()
	}

	if(winBool == true){
		winGame()
	}

}


function startGame(){
	background(0)


	//paddle
	rect(mouseX, windowHeight-20, paddleWidth, 40)


	fill(255)
	textSize(40)
	text('Tag the Furby! Your score is ' + score + ' points!!!', 0, 100 )

	image(furby, furbyX, furbyY, 30, 30)


	mouseDist = dist(mouseX, mouseY, furbyX, furbyY)

	// if(mouseDist < 15){
	// 	score ++
	// 	furbyX = random(16, windowWidth-16)
	// 	furbyY = random(16, windowHeight-16)

	// 	xSpeed = xSpeed * 1.2
	// 	ySpeed = ySpeed * 1.2
	// }


//moving furby
	furbyX = furbyX + xSpeed
	furbyY = furbyY + ySpeed


//change direction of furby
	if(furbyX >= windowWidth - 15 || furbyX <= 15){
		xSpeed = xSpeed * -1
	}

	if(furbyY <= 15){
		ySpeed = ySpeed * -1

	}

	if(score == 5){
		winBool=true
		startBool=false
	}

	//did furby hit paddle if so reverse direction and multiply speed
	if(furbyY >= windowHeight-55 && furbyX < mouseX+paddleWidth/2 && furbyX > mouseX-paddleWidth/2){
		ySpeed = ySpeed * -2
	}


}


function winGame(){
	background(0, 0, 255)
	fill(255)
	textSize(40)
	text('You Win!!!', windowWidth/2, 50 )

	image(furby, windowWidth/2, windowHeight/2, 500, 500)

}







