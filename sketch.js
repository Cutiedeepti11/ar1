const Engine=Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;

var engine, world;

var ball,ground




function setup()
{
  createCanvas(900,600);
  engine=Engine.create();
  world=engine.world;
  var options = {
    isStatic:true

  }
  ground=Bodies.rectangle(200,600,50,50,options);
  World.add(world,ground)
  var ball_options ={
    restitution:1.0
    
  }
  

  ball=Bodies.circle(200,100,50,ball_options)
  World.add(world,ball)
  console.log(ground)
  console.log(ground.position.x);
  console.log(ground.position.y);
}
function draw()
{
  var pos=ground.position
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(pos.x,pos.y,1000,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50)



} 


