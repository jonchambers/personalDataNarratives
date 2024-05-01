let table;
let companyMenu;
let canvas
let imageArray = [];
let submitButton;
let company
let date 
let bgColor
let frequency
function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('personalData.csv', 'csv', 'header', loadImages);

}

function loadImages(){
  // cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage("images/" + table.getString(i, 'image'));

  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")
  background(155);
  textSize(30)
  imageMode(CENTER);
   companyMenu = createSelect();
  companyMenu.option('Select Company')
  submitButton = createButton('Submit');

  company = table.getColumn('company');
  //grab each of the dates
    date = table.getColumn('date');
  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){
    //imageArray[i] = loadImage("images/" + table.getString(i, 'image'));
    
    
 
     companyMenu.option(date[i])

     print(date[i])  
   
  }

 //trigger the changeData function when button is pressed
  submitButton.mousePressed(changeData);

}

function changeData(){
  background(155);
  for (let i = 0; i < date.length; i++){
    if(companyMenu.value() == date[i]){
      print(date[i])
      frequency = table.getNum(i, 'frequency')

      //map the background color of the rectangles 
      //to min and max values of frequency
      //the higher the number, the darker the color 
      bgColor = map(frequency, 0, 300, 255, 0)
      
      //fill the rects with the maped color
      fill(bgColor)

      //draw the rects usung the frequency number as the width
      rect(250, 100 + i*100, frequency, 100)

      //display some text associated with entries 
      fill(0)
      textSize(30)
      text(table.getString(i, 'company'), 100, 150 + i*100)
      textSize(20)
      text(table.getString(i, 'date'), 100, 170 + i*100);
      text(table.getString(i, 'service'), 100, 190 + i*100);
      text(frequency, frequency+280, 150 + i*100)
      //image(imageArray[i], frequency+280, 150 + i*100, 20, 20)
        
    }
  }
  
  

}

function draw(){


}
