var size = {
  x: 50,
  y: 50,
};
let myColors = ["#FF0000", "#0000FF", "#FFFF00", "#000000", "#FFFFFF"];
let randCol;

let x;
let y;
let z;
let angle = 0;
let posx = 0;
let posy = 0;
let delta = 0.01;

function setup() {
  print("Welcome to the random color generator!");
  createCanvas(800, 400, WEBGL);
  background(247, 233, 186);
  cam = createCamera();
  cam.pan(delta);
  fill("#FFFF00"); //geel
  translate(-50, 40);
  box(80, 100);
  fill("#0000FF"); //blauw
  translate(100, 0);
  box(80);
  fill("#FF0000"); //rood
  translate(-120, -100);
  box(100, 100);
  fill("#000000"); //zwart
  translate(-100, -50);
  box(80);
  fill("#FFFF00"); //geel
  translate(40, 100);
  box(60);
  fill("#FFFFFF"); //wit
  translate(-80, 100);
  box(80);
  fill("#000000"); //zwart
  translate(0, -150);
  box(100, 5);
  fill("#0000FF"); //blauw
  translate(-20, -80);
  box(70);
  fill("#FF0000"); //rood
  translate(180, 180);
  box(40);
  fill("#0000FF"); //blauw
  translate(-140, -20);
  box(60);
  fill("#FFFFFF"); //wit
  translate(280, -120);
  box(60);
  fill("#000000"); //zwart
  translate(-60, 60);
  box(80);
  fill("#FF0000"); //rood
  translate(180, 180);
  box(40);
  fill("#FF0000"); //rood
  translate(-150, 0);
  box(60);
  fill("#FFFF00"); //geel
  translate(70, -20);
  box(60);
  fill("#000000"); //zwart
  translate(-10, -150);
  box(100, 5);
  fill("#FFFFFF"); //wit
  translate(100, -120);
  box(60);
  fill("#0000FF"); //blauw
  translate(-140, -20);
  box(60);
  fill("#FFFF00"); //geel
  translate(-370, 100);
  box(60);
  fill("#FF0000"); //rood
  translate(-120, -100);
  box(100, 100);
  fill("#FF0000"); //rood
  translate(120, 280);
  box(100, 100);
  fill("#000000"); //zwart
  translate(-20, -100);
  box(50);
  fill("#000000"); //zwart
  translate(200, 130);
  box(100, 50);
  fill("#0000FF"); //blauw
  translate(340, -100);
  box(80);
  fill("#FFFF00"); //geel
  translate(-100, -30);
  box(40);
  fill("#FF0000"); //rood
  translate(90, -70);
  box(40);

  fill("#FF0000"); //middenblok
  translate(0);
  box(0);
  x = 0;
  y = 0;
  z = 0;
  house();
}

function draw() {
  randomness();
}

function mousePressed() {
  randCol = random(myColors.length);
  randCol = floor(randCol);
  print("A new color was made!");
  fill(myColors[randCol]);
  house();
}

// function achtergrondje(){
//   noStroke();
//   fill("#FF0000");
//   translate(50,50);
//   box(50);
//   fill("#0000FF");
//   translate(100,100);
//   box(70);
//   fill("#FFFF00");
//   translate(170,170);
//   box(150);

// }

function house() {
  rotate(3);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  stroke(1);
  box(200, 100);
  stroke(1);
  translate(0, 110);
  cone(120);
  translate(-150, -100);
  box(100, 50);
  translate(0, 55);
  cone(60);
  rotate(width, height);
}

function randomness() {
  if (keyCode == LEFT_ARROW) {
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    rotate(3);
    stroke(1);
    box(x, y, z);
    stroke(1);
    translate(0, 110);
    cone(x, y, z);
    stroke(1);
    translate(-150, -100);
    box(x, y, z);
    stroke(1);
    translate(0, 55);
    cone(x, y, z);

    const r = floor(random(6));
    switch (r) {
      case 0:
        x = x + 10;
        y = y + 10;
        break;
      case 1:
        x = x - 10;
        y = y - 10;
        break;
      case 2:
        x = x + 10;
        y = y - 10;
        break;
      case 3:
        y = y + 10;
        x = x - 10;
        break;
      case 4:
        z = z + 10;
        break;
      case 5:
        z = z - 10;
        break;
    }
    rotateY(angle);
    angle += 1;
  } else {
    keyCode == RIGHT_ARROW;
  }
}