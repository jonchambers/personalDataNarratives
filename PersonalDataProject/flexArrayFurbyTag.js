let paddleWidth= 400

let furby

let furbyX = []
let furbyY = []

let xSpeed = []
let ySpeed = []


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

	// furbyX = windowWidth/2
	// furbyY = windowHeight/2

	rectMode(CENTER)

	for(let i=0; i<1; i++){
		furbyX.push(windowWidth/2)
		furbyY.push(windowHeight/2)
		xSpeed.push(2)
		ySpeed.push(2)
	}


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


	//image(furby, furbyX, furbyY, 30, 30)


	//mouseDist = dist(mouseX, mouseY, furbyX, furbyY)

	// if(mouseDist < 15){
	// 	score ++
	// 	furbyX = random(16, windowWidth-16)
	// 	furbyY = random(16, windowHeight-16)

	// 	xSpeed = xSpeed * 1.2
	// 	ySpeed = ySpeed * 1.2
	// }

	for(let i= 0; i < furbyX.length; i++){
		image(furby, furbyX[i], furbyY[i], 30, 30)
//moving furby
	furbyX[i] = furbyX[i] + xSpeed[i]
	furbyY[i] = furbyY[i] + ySpeed[i]


//change direction of furby
	if(furbyX[i] >= windowWidth - 15 || furbyX[i] <= 15){
		xSpeed[i] = xSpeed[i] * -1
	}

	if(furbyY[i] <= 15){
		ySpeed[i] = ySpeed[i] * -1

	}	

	//did furby hit paddle if so reverse direction and multiply speed
	if(furbyY[i] == windowHeight-55 && furbyX[i] < mouseX+paddleWidth/2 && furbyX[i] > mouseX-paddleWidth/2){
		ySpeed[i] = ySpeed[i] * -1.5



		if(furbyX.length < 6){
			furbyX.push(windowWidth/2)
			furbyY.push(windowHeight/2)
			xSpeed.push(2)
			ySpeed.push(2)
		}
		
	}



}


if(score == 5){
		winBool=true
		startBool=false
	}


}


function winGame(){
	background(0, 0, 255)
	fill(255)
	textSize(40)
	text('You Win!!!', windowWidth/2, 50 )

	image(furby, windowWidth/2, windowHeight/2, 500, 500)

}







