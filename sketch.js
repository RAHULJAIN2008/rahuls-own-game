var mario,ground,gun,bullet,backgroundimg,marioimg,gunimg,bulletimg;
var invisibleground;
var score = 0;


function preload(){
marioimg = loadAnimation("mario.gif");
gunimg = loadAnimation("gun.gif");
bulletimg = loadImage("bullet.png");
backgroundimg = loadImage("background.jpg");

}



function setup() {
  createCanvas(1000,600);
ground = createSprite(400,150,1500,900);
ground.addImage("background",backgroundimg);
mario = createSprite(70, 200, 50, 50);
mario.addAnimation("mario",marioimg);
invisibleground = createSprite(80,350,50,50);
invisibleground.visible=false;
gun = createSprite(700,250,50,50);
gun.addAnimation("gun",gunimg);
gun.scale = 0.5;

}


function draw() {
  background(255,255,255); 
  score = text("Score:"+score,750,50);
  if(keyDown("space")&& mario.y >= 100) {
    mario.velocityY = -12;
  }


//add gravity
mario.velocityY = mario.velocityY + 0.8;
bulletload(); 
mario.collide(invisibleground);
drawSprites();

}
function bulletload(){
if(frameCount%20==0){
  gun.y = Math.round(random(100,250));
var bullet = createSprite(650,gun.y-10,10,10);
bullet.addImage("bullet",bulletimg);
bullet.velocityX = -20;
}


}