

let colorChangeButton
let colorChangeButtonOff
let canvas 

let playButton

let modem

let drawBool = false

let randNumLeft 
let randNumTop

let spamcount = 0

let buttons

let hotSpotX;
let hotspotY

function preload(){
 modem = loadSound('ModemSound.mp3')
}

function setup(){

canvas = createCanvas(windowWidth, windowHeight)
canvas.position(0,0)
canvas.style('z-index', '-1')

background(140)
hotSpotX = windowWidth/2
hotspotY = windowHeight/2
colorChangeButton = createButton('Change Background')
colorChangeButton.position(200, 200)
colorChangeButton.mousePressed(backgroundColorChange)

colorChangeButtonOff = createButton('Turn off pencil')
colorChangeButtonOff.position(200, 300)
colorChangeButtonOff.mousePressed(turnOffPencil)


playButton = createButton('Pop Up')
playButton.position(200, 400)
playButton.mousePressed(popUp)


buttons = document.getElementsByTagName("button");
//print(buttons[0].style.display = "none")
}

function playModem(){
	
	if(!modem.isPlaying()){
		modem.play();
		playButton.html('pause modem')
	}else{
		modem.pause();
		playButton.html('play modem')
	}
}

function turnOffPencil(){
	
	drawBool = false
}

function backgroundColorChange(){
	drawBool = true
	background(random(255), random(255), random(255))
}

function draw(){

if(drawBool == true){
	line(mouseX, mouseY, pmouseX, pmouseY);

}



ellipse(windowWidth/2, windowHeight/2, 100, 100)

if(spamcount == 0 && dist(mouseX, mouseY, windowWidth/2, windowHeight/2)<50){
	
	
popUp()

	// for (var i = 0; i < buttons.length; i++) {
  	// 	buttons[i].style.display = "none"
	// }
	
}else if(dist(mouseX, mouseY, windowWidth/2, windowHeight/2)>50){
	spamcount = 0;
	
	// for (var i = 0; i < buttons.length; i++) {
  	// 	buttons[i].style.display = "inline-block"
	// }
}

print(spamcount)
}


function popUp(){
	playButton.hide()
	for(i=0; i<5; i++){
	// randNumLeft = random(200, 600)
	// randNumTop = random(0, 800)
	window.open("images/spotify.png", "", "width=400,height=400, left="+random(0, windowWidth)+", top="+random(0, windowHeight)+"");
	}
	spamcount = 1
  	//print(randNum)
  //myWindow.document.write("");
}