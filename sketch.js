/*

bob1 & chain1 is middle bob.
bob2 & chain2 is 2nd bob from right.
bob3 & chain3 is bob in the right end.
bob4 & chain4 is 2nd bob from left.
bob5 & chain5 is bob in the left end.

*/

const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var chance=1, bob3_reach=0, bob5_reach=0;

var supportStand;
var chain1,chain2,chain3,chain4,chain5;
var bob1,bob2,bob3,bob4,bob5;

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  supportStand = new block(500,100,500,50);

  bob1 = new bob(supportStand.body.position.x,350,true);
  bob2 = new bob(580,350,true);
  bob3 = new bob(660,350,false);
  bob4 = new bob(420,350,true);
  bob5 = new bob(340,350,false);

  chain1 = new chain(bob1.body,{x:500,y:100});
  chain2 = new chain(bob2.body,{x:580,y:100});
  chain3 = new chain(bob3.body,{x:660,y:100});
  chain4 = new chain(bob4.body,{x:420,y:100});
  chain5 = new chain(bob5.body,{x:340,y:100});

}

function draw() {
  Engine.update(engine);
  background("black");

  supportStand.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  if(keyDown("left") && chance==1) {
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-0.2,y:0});
    chance=0;
  }
  else if(keyDown("right") && chance==1) {
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x:0.2,y:0});
    chance=0;
  }

  if(bob3.body.position.x>=860) {
    bob3_reach=1;
  }
  else if(bob5.body.position.x<=150) {
    bob5_reach=1;
  }

  if(bob3.body.position.x-bob2.body.position.x<=81 && bob3_reach==1) {
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-0.2,y:0});
    bob3_reach=0;
  }
  if(bob4.body.position.x-bob5.body.position.x<=81 && bob5_reach==1) {
    Matter.Body.applyForce(bob3.body,bob3.body.position,{x:0.2,y:0});
    bob5_reach=0;
  }


}