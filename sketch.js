
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bin1,bin2,bin3,Youwin,dustBinIMG;

function preload()
{
	dustBinIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(2000,700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,500,30);
	ground = new Ground(1000,700,2000,50);
	bin1 = new Dustbin(1405,580,20,180);
	bin2 = new Dustbin(1485,665,175,20);
	bin3 = new Dustbin(1565,580,20,180);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);


	paper.display();
	ground.display(); 
	bin1.display(); 
	bin3.display();
	bin2.display();

	  
	imageMode(CENTER);
	image(dustBinIMG,1485,580,200,200);
  
	
  drawSprites();
 keyPressed(); 
}

function keyPressed () {

if(keyWentDown(UP_ARROW)) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:255,y:-255});
	

}

}


