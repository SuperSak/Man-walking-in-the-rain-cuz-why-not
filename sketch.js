const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var drop, dropCount;
var dropArray = [];
var lightning, lighting;
var umbrella, walking;

function preload(){
  lighting = loadAnimation("1.png","2.png","3.png","4.png");
  walking = loadImage("walking_1.png")
}

function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;  
  if(frameCount%100==0){
    for(i=0; i<100; i+=1){
      //drop = new Drops(200, 0)
      //dropCount++
      dropArray.push(new Drops(random(0,400), random(0,800)))
    }
  }
  lightning = createSprite(width/2,150,width,20);
  lightning.addAnimation("flashing", lighting)
  lightning.scale = 0.5
  umbrella = new Umbrella(200, 625, 150)
}

function draw(){
  Engine.update(engine);
  background(0);
  umbrella.display()
  //console.log(drop.body.position.y)
  for(i=0;i<100; i+=1){
    dropArray[i].display();
    dropArray[i].update();
  }  
  drawSprites();
}