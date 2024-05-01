let table

let button

let canvas

function preload(){
	table = loadTable('personalData.csv', 'csv', 'header');
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight)

canvas.position(0,0);
canvas.style("z-index", "-1");
//background(0);


for (var i = 0; i < table.getRowCount(); i++){

    // imageArray[i] = loadImage("images/" + table.getString(i, 'image'));
	//text()
	createP(table.getString(i, 'date'), windowWidth/2, 100)
    createP(table.getString(i, 'location'), windowWidth/2, 100)
    //print()

  }
  //print(imageArray);

}


function draw(){


}


