// images sind selbst gemalt, daher keine Quelle (bzw. ich bin die Quelle)

var xPos = 300;
var yPos = 0;
var speed = 0.5;
var currentVelocity = 0;
var velocity = 0.2;
var startGame = false;
var hasFinished = false;
var groundY = 475;
var eaterX = 300;
var eaterWidth = 300;
var currentlevel = 1;
var maxSpeed = 14;
var imgNoFace = loadImage("../assets/noface.png");
var randomImage;
var imgSalmon = loadImage("../assets/salmon.png");
var imgSteak = loadImage("../assets/steak.png");
var imgPancake = loadImage("../assets/pancake.png");
var foodImages = [imgSalmon, imgSteak, imgPancake]; // bei jeder Runde/Neustart soll random ein anderes Essen landen



function draw() {
  background(219, 189, 162);
  noStroke();
  fill(0);
  // text("x: " + mouseX + "\n" + "y: " + mouseY, 50, 50);
  stats();
  eater();

  if (startGame) {
    foodLander();
  }

  table();

  var isTooFast = speed + currentVelocity > maxSpeed;
  var hasHitTable = yPos >= groundY;
  var hasHitEater =
    xPos >= eaterX - eaterWidth / 2 && xPos <= eaterX + eaterWidth / 2;

  if (!startGame && !hasFinished) {
    startManual();
    handleStart();
    console.log("highscore: Level 21, Kevin");
  }

  if (hasFinished) {
    gameOver();
  }

  if (startGame && !hasFinished) {
    // Hilfe von Freund
    // if (has not hit eater) || (has hit eater too fast)
    if (
      (hasHitTable && !hasHitEater) ||
      (isTooFast && hasHitEater && hasHitTable)
    ) {
      // lose

      hasFinished = true;
    } else if (hasHitTable && hasHitEater) {
      // win
      nextLevel();
    } else {
      // while playing
      yPos += speed + currentVelocity;
      currentVelocity += velocity; // code von Beschleunigung ist durch Flos(der Blonde) Anregung zustande gekommen
    }

    if (yPos > groundY) {
      yPos = groundY;
    }

    if (keyIsPressed) {
      if (keyIsDown(65) || keyIsDown(37)) {
        // a
        xPos -= speed + 3;
      }
      if (keyIsDown(68) || keyIsDown(39)) {
        // d
        xPos += speed + 2;
      }
      if (keyIsDown(87) || keyIsDown(38)) {
        // w
        currentVelocity = -2;
        yPos -= speed - currentVelocity;
      }
    }
  } else if (!startGame) {
    currentVelocity = 0;
    yPos = 0;
    xPos = 270;
  }
}

function handleStart() {
  if (keyIsPressed) {
    if (keyIsDown(32)) {
      // enter
      hasFinished = false;
      startGame = true;
      var randomImageIndex = Math.round(random(0, foodImages.length - 1));
      randomImage = foodImages[randomImageIndex]; // Hilfe von Freund
    }
  }
}

function handleReset() {
  if (keyIsPressed) {
    if (keyIsDown(32)) {
      // space
      startGame = false;
      velocity = 0.2;
      currentlevel = 1;
      startGame = false;
      hasFinished = false;
    }
  }
}

function foodLander() {
  fill(0);
  imageMode(CENTER);
  image(randomImage, xPos, yPos, 150, 150);
}

function table() {
  fill(128, 67, 50); // light brown
  rect(0, 500, 600, 100, 5);
  stroke(61, 32, 23); // dark brown
  strokeWeight(20);
  line(0, 520, 600, 520);
  strokeWeight(10);
  line(0, 540, 600, 540);
}

function gameOver() {
  handleReset();

  push();
  textAlign(CENTER);
  textFont("Georgia", 90);
  text("GAME OVER", 300, 200);
  textSize(40);
  strokeWeight(5);
  fill(255);
  text("you reached:" + "\n" + "level " + currentlevel, 300, 270);
  noStroke();
  fill(161, 8, 8); // red
  text("press space to restart", 300, 390);
  pop();
}

function eater() {
  fill(0);
  imageMode(CENTER);
  image(imgNoFace, eaterX, 450, eaterWidth, 300);
  // rect(eaterX, 450, eaterWidth, 30);
}

function nextLevel() {
  yPos = 0;
  xPos = 250;
  velocity += 0.2;
  currentlevel += 1;
  eaterX = random(50, 550);
  var randomImageIndex = Math.round(random(0, foodImages.length - 1));
  randomImage = foodImages[randomImageIndex];
}

function stats() {
  push();
  textFont("Georgia", 30);
  fill(128, 67, 50); // light brown
  text("level: " + currentlevel, 30, 50);
  textSize(20);
  text(
    "speed: " + Math.round(speed + currentVelocity - 0.5) + "/" + maxSpeed,
    30,
    80
  );
  pop();
}

function startManual() {
  push();
  noStroke();
  textAlign(CENTER);
  textFont("Georgia", 30);
  fill(161, 8, 8); // red
  text("press space to start", 300, 260);
  fill(128, 67, 50);
  stroke(61, 32, 23);
  textSize(80);
  text("FOODLANDER", 300, 200);
  pop();
}
