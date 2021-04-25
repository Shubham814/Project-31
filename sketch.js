const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Empty Arrays
var particles = [];
var plinkos = [];
var divisons = [];
//

//Variables
var divisonHeight = 300;
//


function setup() {
  createCanvas(480,800);
  //Matter
  engine = Engine.create();
  world = engine.world;
  //

  //Creating Bodies
  Ground1 = new Ground(width/2,680,width,12);

  for (var d = 0; d<=width; d = d+80 ){
    divisons.push(new Divison(d,530,10,divisonHeight));
  }
 
  for (var j = 15; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,50));
  }
  for (var j = 40; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,125));
  }
  for (var j = 15; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,200));
  }
  for (var j = 40; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,350));
  }


  //
}

function draw() {
  background(0);

  Engine.update(engine); 



//particles
  if(frameCount%60===0){
    plinkos.push(new Particle(random(width/2-15,width/2+15),10,10));
  }
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  //
  
  //Displaying Bodies
  Ground1.display();

  for (var d = 0; d < divisons.length; d++){
    divisons[d].display();
  }
  for (var j = 15; j< plinkos.length; j++){
    plinkos[j].display();
  }


  //

  drawSprites();
}