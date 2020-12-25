
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob;
var stand;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("violet");

  bobObject1=new Bob(150,400,40,40);
  bobObject2=new Bob(300,400,40,40);
  bobObject3=new Bob(450,400,40,40);
  bobObject4=new Bob(600,400,40,40);
  bobObject5=new Bob(750,400,40,40);

  stand=creatSprite(200,200,300,30);
  
  drawSprites();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();

}



