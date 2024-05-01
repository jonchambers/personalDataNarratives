
//x and y position arrays  
let x = []
let y = []


let furbySpeed = []
//image variable
let furby


let fairyPlayer
let fairyYpos
let fairyXpos = 0
let fairyXspeed = 5

//load image
function preload(){

	furby = loadImage("furby.png")
	fairyPlayer = loadImage("furby.png")
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
	fairyYpos = windowHeight-30
	// for(let i=0; i<100; i++){
	// 	x.push(random(windowWidth))
	// 	y.push(random(windowHeight))
	// 	furbySpeed.push(random(1, 4))
	// }

}


function draw(){
	background(0)

	//cycle through the arrays with a for loop,
	//if there's an x,y position, place a furby there.
	//also, if the mouse is close to the furby, delete it 
	//from the array using splice()

	image(fairyPlayer, fairyXpos, fairyYpos, 30, 30)

	fairyXpos = fairyXpos + fairyXspeed 

	if(fairyXpos <= 0 || fairyXpos >= windowWidth+5){
		fairyXspeed = fairyXspeed * -1
	}


	for(let i= 0; i < x.length; i++){
		image(furby, x[i], y[i], 60, 60)
		y[i] = y[i] + furbySpeed[i]

		if(dist(fairyXpos, fairyYpos, x[i], y[i]) <30){
			x.splice(i, 1)
			y.splice(i, 1)
			fairyXspeed = fairyXspeed * 1.5
		}

	}

	print(x.length)
}


//you can add a furby at the cursor location with mouse pressed here
//if you do this, comment the mouse dist() function above
function mousePressed(){
	if(mouseY < 200){
		x.push(mouseX)
		y.push(mouseY)
		furbySpeed.push(random(1, 4))
	}
}

function keyPressed(){

	// if(key == 'x'){
	// 	//add to the x,y arrays with a keypress
	// 	x.push(random(windowWidth))
	// 	y.push(random(windowHeight))
	// }

	// if(key == 'c'){
	// 	//delete every position in arrays with keypress
	// 	x.splice(0, x.length)
	// 	y.splice(0, y.length)
	// }

}












