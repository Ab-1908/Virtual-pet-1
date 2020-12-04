//Create variables here

var dog, dogImage, happydog, happydogImage;
var  Food, foodS, foodStock;
var database;

function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
  happydogImage = loadImage("happydog.png");
 
}

function setup() {

  database = firebase.database()
  createCanvas(500, 500);
  dog = createSprite(270,240,30,30);
  dog.addImage(dogImage);
  dog.scale=0.3;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
    background(46,139,87);

    if(keyWentDown(UP_ARROW))
  {
     writeStock(foodS);
     dog.addImage(happydogImage);
    

  }

  drawSprites();
  //add styles here

  textSize(15);
  fill("white");
  text("Food remaining" + foodS, 170, 100);
  text("NOTE: press UP ARROW KEY to feed drago milk!", 100, 20)
  

  
}

function readStock(data)
{
foodS = data.val();

}

function writeStock(x)
{
  if(x<=0)
  {
    x=0;
  }
  else
  {
    x=x-1
  }

database.ref('/').update({
   Food:x
})
}

