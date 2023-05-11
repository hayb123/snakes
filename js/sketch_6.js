//https://happycoding.io/tutorials/p5js/array-functions

let trail1 = [];
let trail2 = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
  noStroke();
}

let theta = 0;

function draw() {
  background("#DEE3E3");

  trail1.push(calcPath(theta, 70));
  trail2.push(calcPath(theta + PI, 70));

  if (trail1.length > 35) {
    trail1.shift();
    trail2.shift();
  }

  for (let i = 0; i < trail1.length; i++) {
    let p = trail1[i];
    let q = trail2[i];

    let circleSize = (30.0 * i) / trail1.length;
    fill("#636578");
    circle(p.x, p.y, circleSize);
    fill("#383131");
    circle(q.x, q.y, circleSize);
  }

  theta += 0.05;
}

function calcPath(theta, radius) {
  return new p5.Vector(
    width / 2 + radius * cos(theta),
    height / 2 + radius * sin(theta)
  );
}
