
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof =new Roof(300,100,350,20);
	bob1 =new Bob(300,300,20);
	bob2 =new Bob(340,300,20);
	bob3 =new Bob(260,300,20);
	bob4 =new Bob(380,300,20);
	bob5 =new Bob(220,300,20);
	rope1=new Rope(bob1.body,roof.body,0,0);
	 rope2=new Rope(bob2.body,roof.body,40,0);
	rope3=new Rope(bob3.body,roof.body,-40,0);
	rope4=new Rope(bob4.body,roof.body,80,0);
	rope5=new Rope(bob5.body,roof.body,-80,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
   roof.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  fill("black");
  text("press the up arrow key to start",220,30);
  
}

function keyPressed(){
 	if(keyCode === UP_ARROW){
		 console.log("hi");
		 console.log(bob5.body);
		 console.log(bob5.body.position);
 		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-70, y:-73});
 	}
 }


