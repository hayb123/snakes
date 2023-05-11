//i also can't get the cursor to appear on this one in VSCode

//https://p5js.org/examples/math-sine-wave.html
let trail = [];
let trail2 = [];

let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background("#99C4BE");
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill("#85ABA6");
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }

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
}
