var cat, catwalk, catsit, catmove;
var garden;
var rat, ratwalk, ratsit, rattease;
function preload() {
   catwalk = loadImage("images/cat2.png");
   catsit = loadImage("images/cat4.png");
    garden = loadImage("images/garden.png");
ratwalk = loadImage("images/mouse1.png");
ratsit = loadImage("images/mouse2.png");
rattease = loadImage("images/mouse3.png");
   //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(900,700,20,20);
cat.addImage(catsit);
cat.scale = 0.2;

rat = createSprite(150,700,20,20);
rat.addImage(ratsit);
rat.scale = 0.1;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
 if(cat.x - rat.x < (cat.width + rat.width)/2) {
     cat.addImage(catsit);
     cat.velocityX = 0;
     rat.addImage(rattease)
 }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === (LEFT_ARROW)) {
cat.velocityX = -3;
cat.addImage(catwalk);
}
if(keyCode === (RIGHT_ARROW)) {
rat.changeImage(rattease);
}
}
