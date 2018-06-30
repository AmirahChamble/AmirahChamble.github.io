var phase = 0 ;
var speed = 0.01 ;

var maxCircleSize = 50;
var numRows = 18;
var numCols = 10;
var numStrands = 6;

var colorA, colorB;

function setup(){

  var myCanvas =  createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent("canvas");

  colorA = color(235, 3, 89); //red
  colorB = color(0, 152, 227); //blue

}

function draw(){
  background(21, 27, 51);
  noStroke();
  //console.log("background is black");

  for(let strand = 0; strand < numStrands; strand += 1) {
  		for(let col = 0; col < numCols; col += 1) {
  			for(let row = 0; row < numRows; row += 1) {

  				let strandPhase = phase + map(strand, 0, numStrands, 0, TAU);

  				let colOffset = map(col, 250, numCols, 50, TWO_PI);
  				let x = map(col, 0, numCols, 800, -width/2 +  -400) ;
  				let y = -height/3 + row * 30 + tan(strandPhase + colOffset) * 100 ;//+sin(50);

  				let sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.3;

  				let circleSize = sizeOffset * maxCircleSize;

  			//	fill(lerpColor(colorA, colorB, row / numRows));
        if(strand % 2 == 0){
          fill(lerpColor(colorA, colorB, row / numRows));
        }else{
          fill(lerpColor(colorB, colorA, row / numRows))
        }

          //translate(0, 0, -strand);
  				//rect(x, y, circleSize, circleSize);
          translate(0, 0, -strand);
  				rect(x, y, circleSize, circleSize);
  			}
  		}
  	}

  	phase = frameCount * speed;
/*
    if(mouseIsPressed){
      saveCanvas();
    }

*/
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
