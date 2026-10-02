function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(40, 40, 10, 10, 2);
  fill(180, 140, 100); 

  //begin shape 
  beginShape(); 
  vertex(100, 100); 
  vertex(100, 400); 
  vertex(300, 200); 
  vertex(300, 50);
  endShape(CLOSE); 
  fill(100, 140, 180); 
}
