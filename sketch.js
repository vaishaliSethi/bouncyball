const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,390,400,10);

   Box1 = new Box(200,200,50,80);
    Box2 = new Box(240,100,60,90);
   
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    Box1.display();
    Box2.display();
   }