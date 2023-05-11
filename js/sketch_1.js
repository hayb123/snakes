// https://github.com/ajTronic/TheCodingKid/blob/main/Challenges/MouseTrail/sketch.js

//https://www.youtube.com/watch?v=jiwg4H8a3fI

//DONE!!!

let trail = [];
let trail2 = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
}

function draw() {
  background("#DEE3E3");
  background(255, 245, 245, 10);

  //trees
  strokeWeight(5);
  stroke("#78725D");
  fill("#C4AF8F");
  rect(32, 300, 60, 700);
  rect(70, 300, 50, 750);
  rect(200, 300, 70, 700);
  rect(490, 300, 60, 720);

  //first snake
  trail.push(createVector(mouseX, mouseY));
  trail2.push(createVector(mouseX + 30, mouseY + 4));
  strokeWeight(0);
  fill("#383131");
  if (trail.length > 50) {
    trail.shift();
  }

  for (let i = 0; i < trail.length; i++) {
    const curr = trail[i];
    ellipse(curr.x, curr.y, i / 2);
  }

  //second snake
  fill("#636578");
  if (trail2.length > 50) {
    trail2.shift();
  }

  for (let i = 0; i < trail2.length; i++) {
    const curr = trail2[i];
    ellipse(curr.x, curr.y, i / 2);
  }

  strokeWeight(5);
  stroke("#78725D");
  fill("#C4AF8F");

  rect(580, 300, 60, 700);
  rect(380, 300, 40, 700);
  rect(460, 300, 20, 700);
  strokeWeight(0);

  fill("#548554");
  triangle(380, 8, 330, 360, 500, 400);

  fill("#A8C499");
  triangle(250, 20, 340, 450, 140, 300);
  triangle(30, 10, 5, 300, 150, 400);
  triangle(500, 20, 490, 250, 390, 300);
  fill("#548554");
  triangle(100, 70, 10, 440, 200, 400);
  triangle(530, 80, 440, 300, 590, 400);

  fill("#A8C499");
  triangle(600, 50, 480, 450, 600, 400);
}
