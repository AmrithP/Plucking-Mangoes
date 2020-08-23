
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Variables are declared

var world, engine;

var backgroundIMG;
var ground;
var stone, tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var boy;
var slingshot;
var text;

function preload()
{

	//Images are loaded

	backgroundIMG = loadImage("background.jpg");
	text = loadImage("text.png");
	
}

function setup() {

	engine = Engine.create();
	world = engine.world;

	createCanvas(800, 700);

	//objects are created from blueprints

	stone = new Stone(125,438,50,50);
	ground = new Ground();
	tree = new Tree(525,400,350,350);
	mango1 = new Mango(600,300);
	mango2 = new Mango(500,350);
	mango3 = new Mango(400,340);
	mango4 = new Mango(550,280);
	mango5 = new Mango(460,300);
	mango6 = new Mango(560,350);
	mango7 = new Mango(650,350);
	mango8 = new Mango(450,375);
	slingshot = new Slingshot(stone.body,{x:125,y:438});
	boy = new Boy();

	Engine.run(engine);
  
}


function draw() {

Engine.update(engine);

  rectMode(CENTER);

  //collision between rock and mangoes are detected

  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  detectcollision(stone,mango6)
  detectcollision(stone,mango7)
  detectcollision(stone,mango8)


	ground.display();


  background(backgroundIMG);

  //all objects are displayed using displai function

tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  boy.display();
  stone.display();

  slingshot.display();

  //text image is displayed

  image(text,180,120,230,230);

  drawSprites();
 
}

//mouse dragged are released functions allow us to drag and realese the rock

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	
}
	
function mouseReleased(){
	
	slingshot.fly();
	
}

//if space is pressed we get the rock again

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(stone.body,{x:125, y:438});
		slingshot = new Slingshot(stone.body,{x:125,y:438});

	}

}

//collision detection function

function detectcollision(lstone,lmango){

	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance<=100){

		Matter.Body.setStatic(lmango.body,false)

	}

}




