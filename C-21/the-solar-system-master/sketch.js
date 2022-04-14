
var sun,planet1

function setup() {
  createCanvas(1600,1600);
  sun=createSprite(400, 200, 50, 50);
  planet1=createSprite(600,100,10,10);

  sun_img=loadImage("./sun.webp")
  blackhole_img=loadImage("./blackhole.webp")
  earth_img=loadImage("./earth.jpeg")
}

function draw() {
  background(0,0,0); 

  var state=0

  planet1.velocityX=5;
  planet1.addImage(earth_img)
  planet1.scale=0.01

  if(planet1.x>700 && state===0) {
  planet1.velocityY=5;
  planet1.velocityX=0;  
  }

  if(planet1.y>200){
  planet1.velocityY=0; 
  planet1.velocityX=-5  
  }

  if(planet1.x<400){
    sun.width=sun.height+10;
    sun.height=sun.width+10;
  }

  sun.addImage(sun_img)
  sun.debug=true;
  sun.setCollider("circle",0,0,110);
  planet1.setCollider("circle",0,0,2)
  
  if(sun.isTouching(planet1)){
      planet1.addImage(blackhole_img)
      planet1.scale=0.19
      planet1.velocityX=0
      sun.scale-=0.002
    }

    setInterval(()=>{
      textSize(32);
      text("why does this always happen to me :(",400, 200,700, 700)
      
      fill(255,255,255)
   
    },22000)
    
  drawSprites();
}