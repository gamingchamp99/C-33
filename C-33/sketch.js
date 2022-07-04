var backgroundImg
var schoolKidImg;
var Character;

var snowflake,snowflakeImg;

function preload(){
  backgroundImg=loadImage("snow2.jpg")
  snowflakeImg = loadImage("snow4.webp");
schoolKidImg=loadImage("snow6.png")
}
  

function setup() {
  createCanvas(800,400);

  Character = createSprite(540,350,10,10);
  Character.addImage(schoolKidImg);
  Character.scale = 0.3;
}



function draw() {
  background(backgroundImg);
  createSnowflake();  
  drawSprites();
} 

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}
