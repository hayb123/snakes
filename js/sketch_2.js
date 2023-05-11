//https://www.youtube.com/watch?v=HTCakn7pDs8
//how to make mouth work? how to make eye slightly off the cursor?
function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
}

function draw() {
  background("#A8C499");
  stroke("#636578");
  strokeWeight(100);
  noFill();

  //light snake
  beginShape();
  curveVertex(mouseX, mouseY);
  curveVertex(200, 500);
  curveVertex(800, 200);
  curveVertex(1000, 500);
  endShape();

  strokeWeight(3);
  stroke("white");
  fill("white");
  ellipse(185, 490, 10, 10);
  line(150, 510, 170, 510);
  triangle(170, 510, 170, 520, 180, 510);

  //dark snake
  strokeWeight(100);
  stroke("#383131");
  beginShape();
  curveVertex(250, 400);
  curveVertex(mouseX, mouseY);
  curveVertex(900, 200);
  curveVertex(1000, 900);
  endShape();

  fill("white");
  strokeWeight(1);
  ellipse(mouseX - 10, mouseY - 10, 10, 10);
  strokeWeight(3);
  stroke("white");
  line(mouseX - 43, mouseY + 25, mouseX - 5, mouseY + 25);
  line(mouseX + 20, mouseY - 30, mouseX - 10, mouseY - 20);
}
