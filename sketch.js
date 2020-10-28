
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
var canvas = 	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	log1 = new Log(810,260,300, PI/2);
	log2 =  new Log(810,180,300, PI/2);
	log3 =  new Log(810,180,300, PI/2);
	ball = new Ball(350,20);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
ground.display();
  log1.display();
  log2.display();
  log3.display();
  ball.display();
  drawSprites();
 
}



