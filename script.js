var cols, rows;
var scl = 20;
var w = 2000;
var h = 1800;

var flying = 0;

var terrain = [];

function setup() {
var myCanvas =  createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent("canvas");
  
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {

  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1*cos(.2);
    }
    yoff += 0.1*cos(.5);
  }


  background(239, 247, 232);
  translate(0, 50);
  rotateX(PI/3);
  fill(179, 132, 54);
  stroke(248, 169, 68);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}