var sea,ship;
var seaImg,shipImg;

function preload(){
  shipImg = loadAnimation("ship1.png","ship2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea=createSprite(200,200,900,200);
  sea.addImage(seaImg);
  sea.velocityX=-4;
  sea.scale=0.3;
  sea.x=sea.width/9;



  ship = createSprite(130,200,30,30);
  ship.addAnimation("barconavelando",shipImg);
  ship.scale =0.25;
}

function draw() {
  background(0);
  if(sea.x < 0){
    sea.x = sea.width/9;
  }
  drawSprites();
}