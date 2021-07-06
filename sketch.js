var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,150,20,20)
  ghost.addImage(ghostImg)
  ghost.scale = 0.5
  invisibleBlockGroup = new Group()
  doorsGroup = new Group()
  climbersGroup = new Group ()
}

function draw() {
  background(200);
if (gameState === "play"){
  if(tower.y > 400){
      tower.y = 300
    }
   if (keyDown(LEFT_ARROW)){
    ghost.x = ghost.x -3
  }
  
   if (keyDown(RIGHT_ARROW)){
    ghost.x = ghost.x +3
   }
   if(keyDown("space")){
   ghost.velocityY = -12

   }
   ghost.velocityY  = ghost.velocityY +0.8
   spwanDoors()
    if(climbersGroup.isTouching(ghost)){
       ghost.velocityY = 0
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600 ){
      ghost.destroy()
      gameState = "end"
    }








   



    drawSprites()
  }
  else if (gameState === "end"){
   fill("yellow")
   text("gameOver",230,250)

  }

  }
function spwanDoors(){
if(frameCount%240===0){
var door = createSprite(200,-50,)
var climber = createSprite(200,10)
var invisibleBlock = createSprite(200,50,climber.width,2)
door.x = Math.round(random(120,400))
climber.x = door.x
invisibleBlock.x = door.x
door.addImage(doorImg)
climber.addImage(climberImg)
door.velocityY = +1
climber.VelocityY = +1
invisibleBlock.velocityY = +1
ghost.depth = door.depth +1
door.lifetime = 800
climber.lifetime = 800
invisibleBlock.lifetime = 800

doorsGroup.add(door)
climbersGroup.add(climber)
invisibleBlockGroup.add(invisibleBlock)







}




}



