//   Over stones","Through fields of flowers", "they traveled"
let trail = [];
let trail2 = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
}
function draw() {
  background("#A8C499");

  //right rock
  fill("#78725D");
  strokeWeight(0);
  ellipse(550, 150, 350, 250);

  stroke("#548554");
  strokeWeight(55);

  //right tulip stem
  line(510, 280, 530, 700);

  //left tulip stem
  line(130, 150, 110, 450);

  //tulip petals interaction

  if (mouseIsPressed === true) {
    //petals
    strokeWeight(0);
    fill("#DE8C6A");

    //right tulip petals
    ellipse(560, 280, 100, 150);
    ellipse(510, 280, 100, 150);
    ellipse(460, 280, 100, 150);

    //left tulip petals
    ellipse(80, 100, 100, 150);
    ellipse(130, 100, 100, 150);
    ellipse(180, 100, 100, 150);
  }

  //left rock
  strokeWeight(0);
  fill("#78725D");
  ellipse(170, 500, 250, 150);

  //left daisy stem
  strokeWeight(40);
  fill("#548554");
  line(280, 400, 270, 600);

  //left daisy center
  strokeWeight(0);
  fill("#FFF34A");
  ellipse(280, 400, 30, 30);

  //bottom right rock
  fill("#78725D");
  ellipse(550, 600, 250, 200);

  //right daisy stem
  strokeWeight(40);
  fill("#548554");
  line(350, 100, 350, 350);

  //right daisy center
  strokeWeight(0);
  fill("#FFF34A");
  ellipse(350, 100, 30, 30);

  fill("#fffff");
  textFont("Poppins");
  text("(*click*)", 470, 100);

  //left daisy petals
  push();
  translate(280, 400);
  fill("white");

  for (var r1 = 0; r1 < 10; r1++) {
    if (frameCount <= 600) {
      ellipse(
        0,
        10 + frameCount / 20,
        10 + frameCount / 40,
        20 + frameCount / 20
      );
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);
  }
  pop();
  //right daisy petals
  push();
  fill("white");
  translate(350, 100);
  noStroke();
  //rotate(radians(frameCount / 2));
  for (var r1 = 0; r1 < 10; r1++) {
    if (frameCount <= 600) {
      ellipse(
        0,
        10 + frameCount / 20,
        10 + frameCount / 40,
        20 + frameCount / 20
      );
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);
  }
  pop();

  //snakes
  trail.push(createVector(mouseX, mouseY));
  trail2.push(createVector(mouseX + 30, mouseY + 40));
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
}
