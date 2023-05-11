//reference: https://p5js.org/examples/hello-p5-animation.html

let x, y, speed;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
  x = width / 2;
  y = height;
  speed = 1;
}

function draw() {
  background("#C4AF8F");
  //snake animation
  stroke(50);
  fill("#636578");
  ellipse(x, y, 200, 60);
  fill("#383131");
  ellipse(x - 100, y, 200, 40);

  // Jiggling randomly on the vertical axis
  y = y + random(-1, 1);

  // Keep em grounded
  if (Math.abs(y - height) > 3) {
    y = height;
  }

  x += speed;

  // Move left if left screen right
  if (x > width + 250) {
    speed = -1;
  }

  //trees
  strokeWeight(5);
  stroke("#78725D");
  fill("#78725D");
  rect(70, 0, 50, 600);
  rect(200, 0, 70, 700);
  rect(490, 0, 60, 720);
  rect(320, 0, 50, 600);
  //branches
  line(70, 130, 20, 100);
  line(100, 180, 180, 100);
  line(150, 100, 200, 300);
  line(250, 100, 320, 340);
  line(350, 230, 200, 300);
  line(400, 200, 500, 260);
  line(150, 100, 200, 300);
  line(15, 200, 70, 300);
  line(500, 100, 580, 200);

  //vines
  if (keyIsPressed) {
    noFill();
    stroke("#A8C499");
    strokeWeight(10);
    ellipse(480, 100, 180, 250);
    stroke("#548554");
    strokeWeight(15);
    ellipse(100, 100, 200, 200);
    ellipse(300, 100, 200, 200);
    ellipse(320, 100, 200, 400);
  }

  //treetops
  strokeWeight(0);
  fill("#A8C499");
  quad(0, 0, 100, 0, 100, 100, 0, 150);
  fill("#548554");
  quad(45, 0, 300, 0, 250, 200, 30, 76);
  quad(600, 0, 400, 0, 350, 100, 600, 60);

  fill("#A8C499");
  quad(250, 0, 430, 0, 460, 100, 200, 250);
  fill("#fffff");
  textFont("Poppins");
  text("(press any key)", 20, 570);
}
