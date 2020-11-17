
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon
var box,polygonIMG;
var slingShot;
function preload(){
  polygonIMG=loadImage("polygon.jpeg")
}

function setup() {
  var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

 polygon=Bodies.circle(100,200,30)
 World.add(world,polygon)

  slingShot = new SlingShot(polygon.body,{x:100,y:200})
  ground = new Ground(600,height,1200,20);
//level1
  b1=new Block(300,250,30,40)
  b2=new Block(330,250,30,40)
  b3=new Block(360,250,30,40)
  b4=new Block(390,250,30,40)
  b5=new Block(420,250,30,40)
  b6=new Block(450,250,30,40)
  b7=new Block(480,250,30,40)

//level2
b8=new Block(330,235,30,40)
b9=new Block(360,235,30,40)
b10=new Block(390,235,30,40)
b11=new Block(420,235,30,40)
b12=new Block(450,235,30,40)
//level3
b13=new Block(360,195,30,40)
b14=new Block(390,195,30,40)
b15=new Block(420,195,30,40)
//top
b16=new Block(390,155,30,40)


}

function draw() {
background(0); 
ground.display()
image(polygonIMG,polygon.position.x,polygon.position.y,30,30)
slingShot.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()
b10.display()
b11.display()
b12.display()
b13.display()
b14.display()
b15.display()
b16.display()


drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}