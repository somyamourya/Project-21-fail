var wall,thicknessofwall;
var bullet,speed,weight;

function setup(){

  createCanvas(1600,400);
  thickness=random(22,83);
  bulletspeed=random(223,321);
  bulletweight=random(30,52);
  bullet =createSprite(70,200,40,40);
  bullet .velocityX=speed;
  bullet.shapeColor=color("white");
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*bulletweight*bulletspeed*bulletspeed/
    (thicknessofwall*thicknessofwall*thicknessofwall);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }


  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.weight;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false;
}










