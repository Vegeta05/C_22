const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, b2, b3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    var ball_options={
        restitution: 1.4
    }

    ball = Bodies.circle(175,100,20,ball_options);
    World.add(world,ball);

    var b2_options={
        restitution: 1.4
    }

    b2 = Bodies.circle(200,100,20,b2_options);
    World.add(world,b2);

    var b3_options={
        restitution: 1.4
    }
    b3 = Bodies.circle(225,100,20,b3_options);
    World.add(world,b3);
    console.log(ground);    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(b2.position.x,b2.position.y,20,20);
    ellipseMode(RADIUS);
    ellipse(b3.position.x,b3.position.y,20,20);
}