var bg,bgImg
var shooter,shooterImg
var shotingImg,bullet,bulletImg,zombie,zombieImg,bulletGroup,zombieGroup
function preload (){
shooterImg = loadImage("assets/shooter_1.png")
bgImg = loadImage("assets/bg.jpeg")
shotingImg = loadImage("assets/shooter_3.png")
bulletImg = loadImage("bullet.png")
zombieImg = loadImage("assets/zombie.png")
}
function setup (){
createCanvas(windowWidth,windowHeight)
bg = createSprite(width/2,height/2)
bg.addImage(bgImg)
bg.scale= 1.1
shooter = createSprite(28,height/2)
shooter.addImage(shooterImg)
shooter.scale= 0.4
bulletGroup = new Group()
zombieGroup = new Group()
}
function draw (){
background(0)
 drawSprites() ;
 if(keyDown("UP_ARROW")){
  shooter.y-=3   
 } 
 if(keyDown("DOWN_ARROW")){
    shooter.y+=3   
 }
if(keyWentDown("space")){
shooter.addImage(shotingImg)
shoot()
} 
if(keyWentUp("space")){
    shooter.addImage(shooterImg)
    
    } 
createZombie()
if(zombieGroup.isTouching(bulletGroup)){
    for(var i=0;i<zombieGroup.length;i++){     
        //write a condition for zombiegroup touches bulletGroup
     if(bulletGroup.isTouching(zombieGroup[i])){
  //destroy zombie
          bulletGroup.destroyEach()
         zombieGroup[i].destroy()
          } 
    
    }
  }
  


if(zombieGroup.isTouching(shooter)){

    for(var i=0;i<zombieGroup.length;i++){     
         
     if(zombieGroup[i].isTouching(shooter)){
          zombieGroup[i].destroy()
   //Decrease the life
          } 
    
    }
   }
}
function shoot(){

    bullet = createSprite(shooter.x,shooter.y-32)
    bullet.addImage(bulletImg)
    bullet.velocityX = 13
    bullet.scale = .045
    shooter.depth  = bullet.depth+1
    bullet.lifetime = width/13
    bulletGroup.add(bullet)

}
function createZombie(){
if(frameCount%60===0){
    zombie = createSprite(width-200,random(100,height-100))
    zombie.addImage(zombieImg)
    zombie.velocityX = -2
    zombie.scale = 0.2
    
    zombie.lifetime = width/2
    zombieGroup.add(zombie)
}


}

