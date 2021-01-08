var garden, gardenImg;
var cat, catImg, catAni,  catImg2;
var mouse, mouseImg, mouseAni, mouseImg2;

function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");

    catImg = loadImage("tomOne.png");
    catAni = loadAnimation("tomTwo.png" , "tomThree.png");
    catImg2 = loadImage("tomFour.png");

    mouseImg = loadImage("jerryOne.png");
    mouseAni = loadAnimation("jerryTwo.png" , "jerryThree.png");
    mouseImg2 = loadImage("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(90,500,10,10);
    garden.addImage(gardenImg);
    garden.scale = 1;

    cat = createSprite(350,350,10,10);
    cat.addImage(catImg);
    cat.scale = 0.1;

    mouse = createSprite(300,350,10,10);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1;

}

function draw() {
    //Write condition here to evalute if tom and jerry collide.
    background(0,0,0);

    keyPressed();

//The cat should not just pass by the mouse, once they touch each the cat should stop and chane images , same 
//with the mouse.
    if (cat.x - mouse.x <(cat.width/2 - mouse.width/2)){
        cat.addAnimation("catSitting" , catImg2);
        cat.changeAnimation("catSitting");

        mouse.addAnimation("mouseLastImg" , mouseImg2);
        mouse.changeAnimation("mouseLastImg");

        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW){
        cat.velocityX = -3;
        cat.addAnimation("catChasing" , catAni);
        cat.changeAnimation("catChasing");

        mouse.addAnimation("teasing" , mouseAni);
        mouse.changeAnimation("teasing");
    }
}

