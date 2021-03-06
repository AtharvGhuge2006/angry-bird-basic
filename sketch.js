  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,pig1,bird,log1,log2,log3,log4;
var box1,box2,box3,box4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);
    box3 = new Box(700,260,50,50);
    box4 = new Box(920,260,50,50);
    ground = new Ground(600,height,width,20);
    pig1 = new Pig(810,320);
    bird = new Bird(100,100);
    log1=new Log(810,280,300,PI/2);
    log2 = new Log(810,230,300,PI/2);
    log3 = new Log(750,150,150,PI/7);
    log4 = new Log(870,150,150,-PI/7);
    pig2 = new Pig(810,160);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    bird.display();
    log2.display();
    log1.display();
    log3.display();
    log4.display();
    pig2.display();
}