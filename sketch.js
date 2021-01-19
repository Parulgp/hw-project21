var bckground, bckgroundImage;
var cat, catImage;
var mouse, mouseImage;

function preload() {
    //load the images here
    bckgroundImage=loadImage("garden.png");
    catImage=loadAnimation("tomOne.png", "tonTwo.png", "tomThree.png", "tomFour.png");
    mouseImage=loadAnimation("jerryOne.png", "jerryTwo.png", "jerryThree.png", "jerryFour.png");
}

function setup(){
    
    //create tom and jerry sprites here
    cat=createSprite(400, 300, 10, 10);
    mouse=createSprite(400, 100, 10, 10);
    mouse.velocityX=5;
}

function draw() {
createCanvas(500, 500);
    background(255);
    //Write condition here to evalute if tom and jerry collide
keyPressed();
    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning", catImage);
    cat.changeAnimation(catRunning)
}
  //For moving and changing animation write code here


}
