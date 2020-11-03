
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,r,Enemy;
var FoodGroup, obstacleGroup
var score
var SurvivalTime=0,score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  fruitGroup = new Group();
  EnemyGroup= new Group();
  survivalTime=0;
  score=0;
  
}


function draw() {
  background("pink");
  createEdgeSprites();
  text("survivalTime:"+survivalTime,300,100);
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Score:"+score,200,50);
  if(ground.x<0){
    ground.x=ground.width/2;
    
  }
  
  if(keyDown("space")){
    
    monkey.velocityY=-12;
  }
  
  
  
  if(fruitGroup.isTouching(monkey)){
    fruitGroup.destroyEach();
    score=score+1;
    
  }
  
  monkey.velocityY=monkey.velocityY + 0.8;
  
  monkey.collide(ground);
 
  fruits();
  Enemy();
drawSprites();
  
}

function fruits(){
  
  if(frameCount%80===0){
    fruit = createSprite(400,200,20,20);
    fruit.addImage(bananaImage);
    fruit.scale=0.07;
    r==Math.round(random(1,2));
    if(r==1){
      fruit.addImage(bananaImage);
  }else if (r==2){
    fruit.addImage(bananaImage);
  }
    
    fruit.y=Math.round(random(120,200));
    fruit.velocityX=-7;
    
    fruit.addlifetime=100;
    fruitGroup.add(fruit);
    

  }
}


function Enemy(){
    
    if(World.frameCount%300===0){
      
      monster=createSprite(400,200,20,20);
      monster.addImage(obstaceImage);
      monster.y=Math.round(random(301,300));
      monster.scale=0.3;
      monster.velocityX=-8;
      monster.setLifetime=50;
      EnemyGroup.add(monster);
    }
    
    
  }
