var tower,towerImage;
var door,doorImage,doorsGroup;
var climber,climberImage,climberGroup;
var ghost,ghostImage;
var invisibleBlock,invisibleBlockGroup;




function preload(){
  towerImage =loadImage("tower.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png");
  ghostImage = loadImage("ghost-standing.png");
}


function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300,10,10);
  tower.addImage("tower",towerImage);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climberGroup = new Group();
  invisibleBlockGroup = new Group();
  
    ghost = createSprite(200,200,50,50);
    ghost.scale = 0.3;
    ghost.addImage("ghost",ghostImage);
}
function draw(){
  background(0);
  
  if(tower.y>400){
    tower.y = 300;
  }
  if(keyDown("right_arrow")){
    ghost.x = ghost .x -3;
  }
   if(keyDown("left_arrow")){
    ghost.x = ghost .x +3;
  } 
   if(keyDown("space")){
    ghost.velocityY =-3;
  } 
ghost.velocityY=ghost.velocityY + 0.5
  
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  if(invisibleBlockGroup.isTouching(ghost)|| ghost.y>600){
    ghost.destroy();
  }
  spawnDoors();
  drawSprites(); 
  //console.log(tower.y);
  
}
function spawnDoors(){
  if(frameCount % 300===0){
    var door = createSprite(200,-50);
    door.addImage(doorImage);
    
    var climber = createSprite(200,10);
    climber.addImage(climberImage);
    door.x = Math.round(random(100,400));
    door.velocityY = 1; 
    
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    
    invisibleBlock.x = door.x;
    invisibleBlock.velocityY = 1;
    
    climber.x = door.x;
    climber.velocityY = 1;
    
    ghost.depth = door.depth;
    ghost.depth += 1;
    door.lifetime = 500;
    climber.lifetime = 500;
    doorsGroup.add(door);
    climberGroup.add(climber);
    
    invisibleBlock.debug = true;
    invisibleBlockGroup.add(invisibleBlock);
  }
    
  
}