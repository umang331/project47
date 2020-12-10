var pc,npc,deadman,backGround,edges,bullet,zom;
var back,player,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8;
var obs4,obs4_1,obs4_2,obs4_3,edge1,edge2,edge3,edge4;
var zomb = [];

function preload(){
  pc = loadImage("images/gunman2.png");
  npc = loadImage("images/gunman1.png");
  deadManimg = loadImage("images/npc.png");
  backGround = loadImage("images/background.png");
  obs1 = loadImage("images/obstacle1.png");
  obs3 = loadImage("images/obstacle3.png");
  obs4 = loadImage("images/obstacle4.png");
  obs4_1 = loadImage("images/obstacle41.png");
  obs4_2 = loadImage("images/obstacle42.png");
  obs4_3 = loadImage("images/obstacle43.png");
  bulleti = loadImage("images/bullet.png");
  bulletGroup = new Group();
  
}

function setup() {
  createCanvas(1730,1200);
 back =  createSprite(865,600,20,20);
 back.addImage(backGround);
 back.scale = 0.5;

 player = createSprite(100,600,20,20);
 player.addImage(pc)
 player.scale = 0.4;

 Nplayer = createSprite(700,700,20,20);
 Nplayer.addImage(npc)
 Nplayer.scale = 0.4;

 edge1 =  createSprite(850,-252,2500,20);
 edge1.visible = false;
 edge2 =  createSprite(850,1452,2500,20);
 edge2.visible = false;
 edge3 =  createSprite(-374,600,20,1700);
 edge3.visible = false;
 edge4 =  createSprite(2090,600,20,1700);
 edge4.visible = false;

 obstacle2 =  createSprite(-204,-84,20,20);
 obstacle2.addImage(obs4_1);
 obstacle3 =  createSprite(1930,1320,20,20);
 obstacle3.addImage(obs4_3);
 obstacle4 =  createSprite(-204,1320 ,20,20);
 obstacle4.addImage(obs4);
 obstacle5 =  createSprite(1966,-84,20,20);
 obstacle5.addImage(obs4_2);


 player.debug = true;

createZombie();
 
 
}

function draw() {
  background(backGround)  
  player.setCollider("rectangle",0,0,240,170)
  camera.position.x =player.x;
  camera.position.y =player.y;
  console.log(camera.position.x);
  console.log(player.y);

    // if(bulletGroup.isTouching(zombieGroup)){
    //   bulletGroup.destroyEach();
    //   for(var i = 0;i<zombieGroup.length;i++){
      
    //   zombieGroup.get(i).destroy();
      
    //   }
    // }

    for(var i = 0;i<zomb.length;i++){
      if(zomb[i].isTouching(bulletGroup)){
        zomb[i].destroy();
        bulletGroup.destroyEach();
      }
    }

  if(keyWentDown(LEFT_ARROW)){
    player.velocityX = -6
  }
  if(keyWentDown(RIGHT_ARROW)){
    player.velocityX = 6
  }
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0
  }
  if(keyWentDown(UP_ARROW)){
    player.velocityY = -6
  }
  if(keyWentDown(DOWN_ARROW)){
    player.velocityY = 6
  }
  if(keyWentUp(UP_ARROW)){
    player.velocityY = 0
  }
  if(keyWentUp(DOWN_ARROW)){
    player.velocityY = 0
  }
  if (keyWentDown("space")) {
    createBullet();
  }

  player.collide(edge1);
  player.collide(edge2)
  player.collide(edge3)
  player.collide(edge4)

  
  

  drawSprites();
  textSize(40);
  fill("white");
  text("hello",20,20)
}
function createBullet() {
  bullet= createSprite(100, 100, 60, 10);
  bullet.setCollider("rectangle",0,0,220,100 );
  bullet.velocityX = 4;
  bullet.addImage(bulleti);
  bullet.x = player.x+40;
  bullet.y=player.y + 24;
  bullet.lifetime = 150;
  bullet.scale = 0.1;
  bulletGroup.add(bullet);
  return bullet;
   
}
function createZombie(){
  for(var i = 0;i<400;i+=70){
    for(var j = 0;j<400;j+=70){
      zombie = createSprite(i,j,10,10);
      zombie.addImage(deadManimg);
      zombie.scale = 0.2
      zomb.push(zombie);
    }
  }
}
