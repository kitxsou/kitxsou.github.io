var x = 0;
var y = 0;
var scale = 0.8;

function draw() {
  background(24, 56, 50); //green
  noStroke();

  //background gradient, code used from p5.js examples linear gradient, but altered
  push();
  var startColor = color(5, 31, 36); //top color
  var endColor = color(24, 56, 50); //bottom color
  var gradientX = 0; //
  var gradientY = 0; // rectangle of gradient box
  var w = width; //
  var h = height; //

  for (var i = gradientY; i <= gradientY + h; i = i + 1) {
    var gradientProgress = map(i, gradientY, gradientY + h, 0, 1.6);
    var gradientColor = lerpColor(startColor, endColor, gradientProgress);
    stroke(gradientColor);
    line(gradientX, i, gradientX + w, i);
  }
  pop();

  //door
  fill(39, 79, 71); //light green
  rect(x + 185 * scale, y + 235 * scale, 230 * scale, 385 * scale);
  fill(203, 242, 235); // white
  rect(x + 200 * scale, y + 250 * scale, 200 * scale, 370 * scale);

  //floor
  fill(31, 64, 66); //blue
  rect(x + 0 * scale, y + 620 * scale, 600 * scale, 150 * scale);
  fill(5, 31, 36, 100);
  rect(x + 0 * scale, y + 660 * scale, 600 * scale, 150 * scale);
  rect(x + 0 * scale, y + 700 * scale, 600 * scale, 109 * scale);

  //door light
  fill(203, 242, 235, 100);
  quad(
    x + 200 * scale,
    y + 620 * scale,
    x + 400 * scale,
    y + 620 * scale,
    x + 440 * scale,
    y + 690 * scale,
    x + 160 * scale,
    y + 690 * scale
  );

  //table
  rectangle(0, 460, 160, 15, 44, 74, 72);
  rectangle(0, 480, 120, 30, 35, 61, 59);
  rectangle(110, 460, 20, 180, 44, 74, 72);
  rectangle(140, 460, 10, 165, 44, 74, 72);
  rectangle(135, 475, 10, 160, 34, 61, 58);

  //drawer
  rectangle(450, 490, 150, 140);

  rectangle(460, 500, 135, 25, 11, 36, 34);
  rectangle(460, 530, 135, 25, 11, 36, 34);
  rectangle(460, 560, 135, 25, 11, 36, 34);

  rectangle(460, 605, 135, 25, 31, 64, 66);
  rectangle(460, 595, 135, 25, 24, 56, 50);

  rectangle(440, 477, 160, 10, 44, 74, 72);
  rectangle(440, 490, 10, 140, 56, 89, 86);

  rectangle(535, 510, 20, 5, 44, 74, 72);
  rectangle(535, 540, 20, 5, 44, 74, 72);
  rectangle(535, 570, 20, 5, 44, 74, 72);

  //frames animation
  frames(m);
  m = m + currentSpeed;

  if (m < -10) {
    currentSpeed = 1;
  }
  if (m > 20) {
    currentSpeed = -1;
  }
  //door shine
  fill(95, 135, 131, 20); //light green
  rect(x + 175 * scale, y + 225 * scale, 250 * scale, 395 * scale);
  rect(x + 150 * scale, y + 200 * scale, 300 * scale, 420 * scale);
  rect(x + 130 * scale, y + 180 * scale, 340 * scale, 440 * scale);

  //jiggle for figure
  figure(random(-5, 5));
}

function rectangle(a, b, c, d, r, g, bl, z) {
  fill(r, g, bl); //dark green
  rect(x + a * scale, y + b * scale, c * scale, d * scale, z);
}

function figure(x2) {
  fill(26, 26, 30);

  push();
  rect(x2 + x + 255 * scale, 380 * scale, 5 * scale, 240 * scale);
  translate(x2 + x + 295 * scale, y + 390 * scale);
  rotate(-0.2);
  rect(0, 30 * scale, 35 * scale, 90 * scale, 30);
  //head
  rotate(-2.7);
  ellipse(40 * scale, 10 * scale, 33 * scale, 43 * scale);
  ellipse(40 * scale, 20 * scale, 38 * scale, 25 * scale);
  ellipse(37 * scale, 25 * scale, 25 * scale, 25 * scale);
  //
  rotate(+3.5);
  rect(30 * scale, 20 * scale, 15 * scale, 50 * scale, 20); //upper left arm
  rotate(-1.3);
  rect(-57 * scale, 19 * scale, 10 * scale, 35 * scale, 20); //under left arm
  rotate(+1.9);
  ellipse(30 * scale, -10 * scale, 11 * scale, 20 * scale); //neck
  rotate(-1);
  rect(80 * scale, 105 * scale, 8 * scale, 60 * scale, 30); //right upper leg
  rect(60 * scale, 150 * scale, 8 * scale, 60 * scale, 30); //left leg
  rotate(-0.7);
  rect(-46 * scale, 177 * scale, 8 * scale, 50 * scale, 30); //right under leg
  rotate(-0.7);
  rect(-25 * scale, 40 * scale, 15 * scale, 35 * scale, 30); //right upper arm
  pop();

  //right under arm
  quad(
    x2 + x + 350 * scale,
    y + 435 * scale,
    x2 + x + 363 * scale,
    y + 460 * scale,
    x2 + x + 368 * scale,
    y + 460 * scale,
    x2 + x + 357 * scale,
    y + 423 * scale
  );
  //feet
  quad(
    x2 + x + 315 * scale,
    y + 600 * scale,
    x2 + x + 300 * scale,
    y + 625 * scale,
    x2 + x + 315 * scale,
    y + 626 * scale,
    x2 + x + 323 * scale,
    y + 606 * scale
  );

  quad(
    x2 + x + 360 * scale,
    y + 600 * scale,
    x2 + x + 350 * scale,
    y + 622 * scale,
    x2 + x + 364 * scale,
    y + 618 * scale,
    x2 + x + 375 * scale,
    y + 606 * scale
  );
  //hands
  quad(
    x2 + x + 270 * scale,
    y + 435 * scale,
    x2 + x + 252 * scale,
    y + 430 * scale,
    x2 + x + 253 * scale,
    y + 447 * scale,
    x2 + x + 270 * scale,
    y + 442 * scale
  );

  quad(
    x2 + x + 365 * scale,
    y + 458 * scale,
    x2 + x + 359 * scale,
    y + 470 * scale,
    x2 + x + 368 * scale,
    y + 478 * scale,
    x2 + x + 376 * scale,
    y + 465 * scale
  );

  quad(
    x2 + x + 352 * scale,
    y + 463 * scale,
    x2 + x + 353 * scale,
    y + 464 * scale,
    x2 + x + 365 * scale,
    y + 467 * scale,
    x2 + x + 365 * scale,
    y + 460 * scale
  );

  push();
  fill(26, 26, 30);
  beginShape();
  curveVertex(x2 + x + 185 * scale, 290 * scale);

  curveVertex(x2 + x + 315 * scale, 490 * scale);
  curveVertex(x2 + x + 290 * scale, 570 * scale);
  curveVertex(x2 + x + 370 * scale, 550 * scale);

  curveVertex(x2 + x + 350 * scale, 590 * scale);
  endShape();
  pop();

  push();
  beginShape();
  curveVertex(x2 + x + 185 * scale, 990 * scale);

  curveVertex(x2 + x + 318 * scale, 496 * scale);
  curveVertex(x2 + x + 348 * scale, 460 * scale);
  curveVertex(x2 + x + 370 * scale, 550 * scale);

  curveVertex(x2 + x + 350 * scale, 890 * scale);
  endShape();
  pop();

  fill(173, 21, 41);
  ellipse(x2 + x + 250 * scale, y + 370 * scale, 9 * scale, 6 * scale);
  ellipse(x2 + x + 263 * scale, y + 370 * scale, 9 * scale, 6 * scale);

  fill(245, 218, 221);
  ellipse(x2 + x + 250 * scale, y + 370 * scale, 3 * scale, 3 * scale);
  ellipse(x2 + x + 263 * scale, y + 370 * scale, 3 * scale, 3 * scale);
}

var currentSpeed = -1;
var m = 0;
function frames(m) {
  //frames
  push();

  rotate(0.2);
  rectangle(0, m + 20, 150, 100, 5, 33, 33);
  rectangle(0, m + 30, 140, 80, 10, 46, 46);

  rotate(-0.4);
  rectangle(400, m + 120, 170, 120, 5, 33, 33);
  rectangle(410, m + 130, 150, 100, 10, 46, 46);

  rotate(0.1);
  rectangle(0, m + 200, 70, 100, 5, 33, 33);
  rectangle(15, m + 215, 40, 70, 10, 46, 46);

  rotate(0.2);
  rectangle(520, m + 210, 95, 100, 5, 33, 33);
  rectangle(530, m + 225, 75, 70, 10, 46, 46);

  rotate(-0.2);
  rectangle(220, m + 60, 135, 120, 5, 33, 33);
  rectangle(240, m + 85, 95, 75, 10, 46, 46);
  pop();
}