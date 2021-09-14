var gameBackground,gameBackgroundIMG;
var Astronaut;
var bath,brush,drink,eat,gym,gym2,move,sleep;

function preload(){

  gameBackgroundIMG = loadImage("iss.png");

  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadImage("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png");
  gym2 = loadAnimation("gym11.png","gym12.png");
  sleep = loadImage("sleep.png");
  
}

function setup() {

  createCanvas(800,400);

  gameBackground = createSprite(400, 200, 50, 50);
  gameBackground.addImage("Background",gameBackgroundIMG);
  gameBackground.scale=0.16;

  Astronaut = createSprite(400,300,0,0);
  Astronaut.scale=0.06125;
  Astronaut.addAnimation("bath",bath);
  Astronaut.addImage("brush",brush);
  Astronaut.addAnimation("drink",drink);
  Astronaut.addAnimation("eat",eat);
  Astronaut.addAnimation("gym",gym);
  Astronaut.addAnimation("gym2",gym2);
  Astronaut.addImage("sleep",sleep);

}

function draw() {

  background(255,255,255); 
  drawSprites();

  createEdgeSprites();


  if(keyDown("UP_ARROW")){
    Astronaut.changeAnimation("eat",eat);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=210;
    Astronaut.x=400;
  }
  
  if(keyDown("DOWN_ARROW")){
    Astronaut.changeAnimation("drink",drink);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=310;
    Astronaut.x=400;
  }

  if(keyDown("LEFT_ARROW")){
    Astronaut.changeAnimation("brush",brush);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=310;
    Astronaut.x=400;
  }

  if(keyDown("RIGHT_ARROW")){
    Astronaut.changeAnimation("bath",bath);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=310;
    Astronaut.x=400;
  }

  

  if(keyDown("G")){
    Astronaut.changeAnimation("gym",gym);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=330;
    Astronaut.x=190;
  }

  if(keyDown("S")){
    Astronaut.changeAnimation("sleep",sleep);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=290;
    Astronaut.x=420;
  }

  if(keyDown("D")){
    Astronaut.changeAnimation("gym2",gym2);
    Astronaut.velocityX=0;
    Astronaut.velocityY=0;
    Astronaut.y=330;
    Astronaut.x=550;
  }

  fill(255,255,255);

  textSize(20);
  text("Instructions:",50,50);

  textSize(17);
  text("Up = Eat",50,75);
  text("Down = Drink",50,95);
  text("Left = Brush",50,115);
  text("Right = Bathing",50,135);
  text("S = Sleep",50,155);
  text("G = Gym",50,175);
  text("D = Other Gym",50,195);
  

}