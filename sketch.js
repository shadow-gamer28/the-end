
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, jungle_img
var bananaGroup, obstacleGroup
var score
var SurvivalTime = 0
var game;
var gameState=0;
var playerCount;

function preload(){
  
  jungle_img = loadImage("jungle.jpg")
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(550,430);
  monkey = createSprite(60,355,20,20);
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.13
  
  ground = createSprite(225,400,92636,20)
  ground.velocityX = -4
  ground.x=ground.width/2
  console.log(ground.x)

  background = createSprite(275,215,20,20)
  background.addImage(jungle_img)
  background.scale = 2
  
  bananaGroup = new Group();
obstacleGroup = new Group();

score = 0;
}

function draw() {
  
  if(ground.x<0) {
    ground.x=ground.width/2
  }
  
  spawnFruits();
  spawnObstacles();
  if(keyDown("space")) {
    monkey.velocityY = -12
  }
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+1
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  drawSprites();
  fill("white")
  text("score: "+ score, 500,50)
  
  stroke("black")
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime, 100,50)
  if(monkey!==undefined){
    var index=0
    var x
    var y=0
  camera.position.y=monkey.y
  camera.position.x=monkey.x
}

if(playerCount === 4){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}

if(gameState === 2){
  game.end()
}

}

function spawnFruits(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(500,250,40,10)
    banana.y = Math.round(random(50,200))
    banana.addImage(bananaImage)
    banana.scale = 0.13
    banana.velocityX = -5
    banana.lifetime = 300;
    monkey.depth = banana.depth+1
    bananaGroup.add(banana)
  }
}

function spawnObstacles(){
  if (frameCount % 180 ===0) {
    var obstacle = createSprite(600,340,10,40)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.3
    obstacle.velocityX = -6
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle)
  }
}




