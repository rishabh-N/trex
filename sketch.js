
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 

}



function setup() {
   createCanvas(600, 400);
 
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
  
  monkey.scale = 0.1;

  //create Obstacle and Food Groups
  obstaclesGroup = createGroup();
  foodsGroup = createGroup();

  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
}


function draw() {

  background(180);
  //displaying score
  text("Score: "+ score, 500,50);  
  
  //scoring
    score = score + Math.round(getFrameRate()/80);
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  
   //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  if(obstaclesGroup.isTouching(monkey)){
        //monkey.velocityY = -12;
}
  
  //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);

drawSprites();
 }

function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
   //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}
   