// Name spacing -> shorcuts
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options ={
    isStatic: true
  }
  body = Bodies.rectangle(200,380,600,30, options);
  World.add(world, body);

  var ballOptions = {
    restitution: 1

  }

  ball = Bodies.circle(200,10,50, ballOptions);
  World.add(world, ball);

  console.log(body);
 
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode (CENTER)
  rect (body.position.x, body.position.y,600, 30);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50);
}