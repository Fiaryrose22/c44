function preload(){
 room =loadImage("assets/room1.jpg")
 toyboximg = loadImage("assets/toy_box.png")
}

function setup() {
 createCanvas(1200,700)

 toybox = createSprite(100,600);
 toybox.addImage("toybox",toyboximg);
  
}

function draw() {
 background(room)

 drawSprites()
}