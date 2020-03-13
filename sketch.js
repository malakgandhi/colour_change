
var r = 255;
var g = 225;
var b = 255;


function setup(){

  createCanvas(1200,400);
}


function draw(){
  r= map(mouseX,0,1200,0,225);
  g =map(mouseX,0,1200,225,0);
  b= map(mouseX,0,1200,0,225);
  background(r,g,b);
  fill(255);
  ellipse(mouseX,100,50,50);
}