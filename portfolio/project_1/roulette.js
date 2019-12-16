// Logikteil von isShowingReset, handleChoiceButtonClick/handleResetButtonClick ist mit Hilfe von Freund entstanden

var xPos = 300;
var speechBubbleText = "what's it gonna be?";
var isShowingReset = false;
var rotation = 0;
var degrees = 1;
var scale = 1;
var growSpeed = 0.035;
var hasWon;

console.log("press blue or red button");

function draw() {
  background(21, 61, 82); //51, 122, 99
  //background gradient, code used from p5.js examples linear gradient, but altered
  push();
  var startColor = color(21, 61, 82); //top color
  var endColor = color(51, 122, 99); //bottom color
  var gradientX = 0; //
  var gradientY = 0; // rectangle of gradient box
  var w = width; //
  var h = height; //

  for (var i = gradientY; i <= gradientY + h; i = i + 0.5) {
    var gradientProgress = map(i, gradientY, gradientY + h, 0, 1);
    var gradientColor = lerpColor(startColor, endColor, gradientProgress);
    stroke(gradientColor);
    line(gradientX, i, gradientX + w, i);
  }
  pop();

  noStroke();

  fill(247, 254, 255); // white
  textSize(70);
  text("LIFECHOICES", 75, 100);

  rotation += degrees; // constant spinning of pin wheel
  pinWheel(rotation);

  // starting screen
  if (isShowingReset === false) {
    drawButton(" blue", 80, 146, 174, 209);
    drawButton(" red", 410, 204, 131, 145);

    arthur(300);
    mask(300);
  } else {
    if (hasWon === false) {
      // lose
      joker(random(290, 300), random(145, 150), scale); // joker runs to you
      if (scale < 4) {
        scale += random(0.01, 0.09); // stops scale at 4
      }
    } else {
      // win
      arthur(300); // arthur with mask pushed aside
      push();
      translate(380, -40);
      rotate(0.8);
      mask(300);
      pop();
    }
    drawButton("reset", 250, 150, 150, 149); // reset button
  }

  speechBubble();
  decisionText();
}

function mousePressed() {
  if (isShowingReset === false) {
    handleChoiceButtonClick();
  } else {
    handleResetButtonClick();
  }
}

function handleChoiceButtonClick() {
  var pressedRed =
    mouseX >= 410 && mouseX <= 530 && mouseY >= 160 && mouseY <= 220;
  var pressedBlue =
    mouseX >= 80 && mouseX <= 200 && mouseY >= 160 && mouseY <= 220;

  if (pressedRed) {
    // pin wheel pushes aside for reset button
    xPos += 150;
  } else if (pressedBlue) {
    xPos -= 150;
  }

  if (pressedRed || pressedBlue) {
    isShowingReset = true; // already pressed a button

    if (random(0, 100) < 50) {
      // random right or wrong choice
      speechBubbleText = "     right choice";
      hasWon = true;
    } else {
      speechBubbleText = "    wrong choice";
      hasWon = false;
    }
  }
}

function handleResetButtonClick() {
  var pressedReset =
    mouseX >= 250 && mouseX <= 370 && mouseY >= 160 && mouseY <= 220;

  if (pressedReset) {
    isShowingReset = false;
    xPos = 300;
    speechBubbleText = "....................again?";
    scale = 1; // scale returns to original state (1)
  }
}

function decisionText() {
  push();
  textSize(40);
  fill(153, 15, 3); // brown
  text(speechBubbleText, 130, 550, 360, 200);
  pop();
}

function joker(x, y, scale) {
  push();
  translate(0, y);
  translate(0, -150 * 2 * scale);
  fill(112, 179, 112); // green
  ellipse(x, y + 338 * scale, 90 * scale, 30 * scale);

  //suit
  fill(240, 210, 201);
  ellipse(x - 48 * scale, y + 475 * scale, 15 * scale, 30 * scale);
  ellipse(x + 48 * scale, y + 475 * scale, 15 * scale, 30 * scale);

  fill(120, 11, 7);
  rect(x - 57 * scale, y + 365 * scale, 18 * scale, 110 * scale);
  rect(x + 39 * scale, y + 365 * scale, 18 * scale, 110 * scale);

  fill(219, 136, 64); // yellow
  rect(x - 25 * scale, y + 350 * scale, 50 * scale, 110 * scale);
  fill(28, 121, 128); // turquoise
  triangle(
    x - 22 * scale,
    y + 350 * scale,
    x + 22 * scale,
    y + 350 * scale,
    x,
    y + 400 * scale
  );
  fill(19, 103, 100); // dark turquoise
  quad(
    x,
    y + 360 * scale,
    x - 12 * scale,
    y + 370 * scale,
    x,
    y + 405 * scale,
    x + 12 * scale,
    y + 370 * scale
  );
  rect(x - 60 * scale, y + 470 * scale, 23 * scale, 10 * scale);
  rect(x + 37 * scale, y + 470 * scale, 23 * scale, 10 * scale);

  fill(153, 23, 18); // red
  quad(
    x - 20 * scale,
    y + 345 * scale,
    x - 55 * scale,
    y + 365 * scale,
    x - 35 * scale,
    y + 430 * scale,
    x - 15 * scale,
    y + 430 * scale
  );
  quad(
    x + 20 * scale,
    y + 345 * scale,
    x + 55 * scale,
    y + 365 * scale,
    x + 35 * scale,
    y + 430 * scale,
    x + 15 * scale,
    y + 430 * scale
  );
  rect(x - 35 * scale, y + 430 * scale, 20 * scale, 30 * scale);
  rect(x + 15 * scale, y + 430 * scale, 20 * scale, 30 * scale);
  fill(247, 254, 255); // white
  circle(x, y + 415 * scale, 3 * scale);
  circle(x, y + 430 * scale, 3 * scale);
  circle(x, y + 445 * scale, 3 * scale);

  // hair
  fill(112, 179, 112); // green
  ellipse(x, y + 285 * scale, 110 * scale, 110 * scale);

  beginShape();
  curveVertex(x - 70 * scale, y + 200 * scale);

  curveVertex(x - 53 * scale, y + 280 * scale);
  curveVertex(x - 65 * scale, y + 310 * scale);
  curveVertex(x - 37 * scale, y + 335 * scale);

  curveVertex(x + 50 * scale, y + 300 * scale);
  endShape();

  beginShape();
  curveVertex(x + 70 * scale, y + 200 * scale);

  curveVertex(x + 53 * scale, y + 280 * scale);
  curveVertex(x + 65 * scale, y + 310 * scale);
  curveVertex(x + 37 * scale, y + 335 * scale);

  curveVertex(x - 50 * scale, y + 300 * scale);
  endShape();

  // face
  fill(247, 254, 255); // white
  ellipse(x, y + 300 * scale, 95 * scale, 110 * scale);
  fill(0);
  ellipse(x - 25 * scale, y + 306 * scale, 20 * scale, 18 * scale);
  ellipse(x + 25 * scale, y + 306 * scale, 20 * scale, 18 * scale);

  fill(112, 179, 112); // green
  ellipse(x, y + 250 * scale, 50 * scale, 30 * scale);

  fill(69, 150, 191); // blue
  triangle(
    x - 25 * scale,
    y + 282 * scale,
    x - 35 * scale,
    y + 296 * scale,
    x - 18 * scale,
    y + 295 * scale
  );
  triangle(
    x + 25 * scale,
    y + 282 * scale,
    x + 35 * scale,
    y + 296 * scale,
    x + 18 * scale,
    y + 295 * scale
  );
  triangle(
    x + 20 * scale,
    y + 314 * scale,
    x + 32 * scale,
    y + 313 * scale,
    x + 25 * scale,
    y + 323 * scale
  );
  triangle(
    x - 20 * scale,
    y + 314 * scale,
    x - 32 * scale,
    y + 313 * scale,
    x - 25 * scale,
    y + 323 * scale
  );

  fill(204, 16, 26); // red
  arc(x, y + 325 * scale, 50 * scale, 25 * scale, 0, PI);
  push();
  translate(x - 25 * scale, y + 284 * scale);
  rotate(3);
  arc(0, 0, 20 * scale, 15 * scale, 0, PI);
  pop();

  push();
  translate(x + 25 * scale, y + 284 * scale);
  rotate(-3);
  arc(0, 0, 20 * scale, 15 * scale, 0, PI);
  pop();
  pop();
}

function speechBubble() {
  fill(237, 214, 178); // yellow
  rect(100, 500, 400, 150, 50);
}

function drawButton(name, x, r, g, b) {
  fill(r, g, b);
  rect(x, 160, 120, 60, 30);

  push();
  fill(247, 254, 255); //white
  textSize(30);
  text(name, x + 25, 200);
  pop();
}

function pinWheel(r) {
  var degree = PI / 180;
  push();
  translate(xPos, 180);
  rotate(degree * r);
  fill(214, 90, 136);
  rect(-15, -15, 30, 30);
  fill(242, 187, 207);

  for (var i = 0; i < 4; i++) {
    pinWheelThing();
    rotate(degree * 90);
  }
  pop();

  fill(255);
  ellipse(xPos, 180, 4, 4);
}

function pinWheelThing() {
  beginShape();
  curveVertex(10, -60);
  curveVertex(0, -40);
  curveVertex(-15, -17);
  curveVertex(0, 0);
  curveVertex(-30, 10);
  endShape();
}

function arthur(x) {
  //suit
  fill(240, 210, 201); // skincolor
  ellipse(x + 48, 475, 15, 30);

  fill(120, 11, 7); // dark red
  rect(x + 39, 365, 18, 110);

  push();
  translate(x - 57, 365);
  rotate(0.3);
  fill(120, 11, 7); // dark red
  rect(0, 0, 18, 60);
  ellipse(9, 55, 20, 20);
  pop();

  fill(219, 136, 64); // yellow
  rect(x - 25, 350, 50, 110);
  fill(28, 121, 128); // turquoise
  triangle(x - 22, 350, x + 22, 350, x, 400);
  fill(19, 103, 100); // dark turquoise
  quad(x, 360, x - 12, 370, x, 405, x + 12, 370);
  rect(x + 37, 470, 23, 10);

  fill(153, 23, 18); // red
  quad(x - 20, 345, x - 55, 365, x - 35, 430, x - 15, 430);
  quad(x + 20, 345, x + 55, 365, x + 35, 430, x + 15, 430);
  rect(x - 35, 430, 20, 30);
  rect(x + 15, 430, 20, 30);
  fill(247, 254, 255); // white
  circle(x, 415, 3);
  circle(x, 430, 3);
  circle(x, 445, 3);

  // hair
  fill(69, 51, 46); // brown
  ellipse(x, 285, 110, 110);
  ellipse(x - 45, 310, 38, 60);
  ellipse(x + 45, 310, 38, 60);
  ellipse(x, 330, 100, 40);

  // face
  fill(240, 210, 201); // skincolor
  ellipse(x, 300, 95, 110);
  fill(0);
  ellipse(x - 25, 306, 20, 18);
  ellipse(x + 25, 306, 20, 18);

  fill(69, 51, 46); // brown
  ellipse(x, 250, 50, 30);

  fill(201, 81, 71); // flesh
  arc(x, 325, 50, 25, 0, PI);
  fill(69, 51, 46); // brown
  push();
  translate(x - 25, 284);
  rotate(3);
  arc(0, 0, 20, 15, 0, PI);
  pop();
  push();
  translate(x + 25, 284);
  rotate(-3);
  arc(0, 0, 20, 15, 0, PI);
  pop();
}

function mask(x) {
  //stick
  fill(0);
  rect(x - 5, 355, 10, 70);

  // hair
  fill(112, 179, 112); // green
  ellipse(x, 285, 110, 110);
  ellipse(x, 338, 90, 30);

  beginShape();
  curveVertex(x - 70, 200);

  curveVertex(x - 53, 280);
  curveVertex(x - 65, 310);
  curveVertex(x - 37, 335);

  curveVertex(x + 50, 300);
  endShape();

  beginShape();
  curveVertex(x + 70, 200);

  curveVertex(x + 53, 280);
  curveVertex(x + 65, 310);
  curveVertex(x + 37, 335);

  curveVertex(x - 50, 300);
  endShape();

  // face
  fill(247, 254, 255); // white
  ellipse(x, 300, 95, 110);
  fill(0);
  ellipse(x - 25, 306, 20, 18);
  ellipse(x + 25, 306, 20, 18);

  fill(112, 179, 112);
  ellipse(x, 250, 50, 30);

  fill(69, 150, 191); // blue
  triangle(x - 25, 282, x - 35, 296, x - 18, 295);
  triangle(x + 25, 282, x + 35, 296, x + 18, 295);
  triangle(x + 20, 314, x + 32, 313, x + 25, 323);
  triangle(x - 20, 314, x - 32, 313, x - 25, 323);

  fill(204, 16, 26); // red
  arc(x, 325, 50, 25, 0, PI);
  push();
  translate(x - 25, 284);
  rotate(3);
  arc(0, 0, 20, 15, 0, PI);
  pop();
  push();
  translate(x + 25, 284);
  rotate(-3);
  arc(0, 0, 20, 15, 0, PI);
  pop();

  // left arm
  push();
  translate(x - 65, 430);
  rotate(-1.8);
  fill(240, 210, 201); // skincolor
  ellipse(9, 65, 15, 30);
  fill(120, 11, 7); // dark red
  rect(0, 0, 18, 70);
  fill(19, 103, 100); // dark turquoise
  rect(-3, +60, 23, 10);
  pop();
}
