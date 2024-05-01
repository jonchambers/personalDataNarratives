
let letterArray = []
let faceboook
let firefox

function preload(){
	faceboook = loadImage("images/fb.png");
	firefox = loadImage("images/firefox.png");
}


function setup(){
	createCanvas(windowWidth, windowHeight)

	


	//ellipse(windowWidth/2, windowHeight/2, 100, 100)
}

function draw(){

for(let i=0; i < letterArray.length; i++){
		image(letterArray[i], (windowWidth/2 - 275) + (i*110), windowHeight/2, 100, 100)
		//line(i, 0, i, windowHeight) 
		//print(i)
		//rect(i*110, 100, 100, 100)
	}
}

function keyPressed(){
	
		// for (datatable)
		// 	if key == getstring letterColumn
		// 	letterArray.push(key)
	
	if(letterArray.length < 5){
		
		if(key === 'w'){
			letterArray.push(faceboook)
			
		}
		if(key === 'q'){
			letterArray.push(firefox)
		}
	}

	print(letterArray)
}

