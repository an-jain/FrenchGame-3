var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var blastImage;
var form, player, playerCount =0;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var autoRickshaw_img;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  autoRickshaw_img = loadImage("../assets/autoRickshaw.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //database = firebase.database();
  game = new Game();
  //game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 1) {
   // game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
   // game.showLeaderboard();
    game.end();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
