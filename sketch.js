const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic:true
    }
    var object_options = {
    'restitution':1.0
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    object = Bodies.circle(100,100,20,object_options);
    World.add(world,object);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(object.position.x,object.position.y,20)
}