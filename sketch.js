var car, wall;
var car1,wall2;
var car2,wall2;
var car3,wall3;



var speed ,weight;

function setup() {
  
  createCanvas(1600,1000);

  car = createSprite(50, 200, 20, 20);
  wall = createSprite(1500,190,30,height/4);

  car1 = createSprite(50, 400, 20, 20);
  wall1 = createSprite(1500,390,30,height/4);

  car2 = createSprite(50, 600, 20, 20);
  wall2 = createSprite(1500,590,30,height/4);

  car3 = createSprite(50, 800, 20, 20);
  wall3 = createSprite(1500,790,30,height/4);





  speed=random(55,90)
  weight=random(400,1500)

}

function draw() {
  
  background(255,255,255);
  
  car.velocityX = speed; 
  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;


 
  if(wall.x-car.x < (car.width+wall.width)/2)
  {

  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22009;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
 {
    car.shapeColor=colur(230,230,0);
 }

 if(deformation<100)
 {
   car.shapeColor=color(0,255,0);
 }  
}

if(wall1.x-car1.x < (car.width+wall.width)/2)
  {

  car1.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22909;
  if(deformation>180)
  {
    car1.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
 {
    car1.shapeColor=colur(230,230,0);
 }

 if(deformation<100)
 {
   car1.shapeColor=color(0,255,0);
 }  
}

if(wall2.x-car2.x < (car.width+wall.width)/2)
  {

  car2.velocityX=0;
  var deformation=0.5 * weight * speed* speed/21909;
  if(deformation>180)
  {
    car2.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
 {
    car2.shapeColor=colur(230,230,0);
 }

 if(deformation<100)
 {
   car2.shapeColor=color(0,255,0);
 }  
}

if(wall3.x-car3.x < (car.width+wall.width)/2)
  {

  car3.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22709;
  if(deformation>180)
  {
    car3.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100)
 {
    car3.shapeColor=colur(230,230,0);
 }

 if(deformation<100)
 {
   car3.shapeColor=color(0,255,0);
 }  
}










  drawSprites();
}