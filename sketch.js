var moveTheBall,fixTheBall
function setup() {
  createCanvas(800,400);
  moveTheBall=createSprite(400, 200, 50, 50);
  fixTheBall=createSprite(400, 200, 50, 50);
  moveTheBall.shapeColor="purple";
  fixTheBall.shapeColor="brown";
}

function draw() {
  background(0,0,0);
  moveTheBall.x=World.mouseX;  
  moveTheBall.y=World.mouseY; 

  maxiumDistance=(moveTheBall.width+fixTheBall.width)/2;
  ultraDistance=(moveTheBall.height+fixTheBall.height)/2;
 distanceToTheLeft=fixTheBall.x-moveTheBall.x;
 distanceToTheRight=moveTheBall.x-fixTheBall.x;
 distanceToTheUp=(fixTheBall.y-moveTheBall.y);
 distanceToTheDown=(moveTheBall.y-fixTheBall.y);

 if((distanceToTheLeft<maxiumDistance)&&(distanceToTheRight<maxiumDistance)&&(distanceToTheUp<ultraDistance)&&(distanceToTheDown<ultraDistance)){
  moveTheBall.shapeColor="orange";
  fixTheBall.shapeColor="orange";
 }else{
  moveTheBall.shapeColor="purple";
  fixTheBall.shapeColor="brown";
 }
 drawSprites();
}