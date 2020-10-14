let joe;
let squares = [];
let liney = 671;
let platforms = [];
let circles = [];
let hits = [];
let flag;


function setup() {
  createCanvas(800, 700);
joe = new Sprite(30,650,10,4);
flag = new Flag(405,100)

p = new Platform(random(100,300),random(520,600));
platforms.push(p);

p2 = new Platform(random(100,700),random(600,650));
platforms.push(p2);

p3 = new Platform(random(50,240),random(180,300));
platforms.push(p3);

p4 = new Platform(random(500,700),random(200,375));
platforms.push(p4);

p5 = new Platform(random(200,400),random(480,560));
platforms.push(p5);

p6 = new Platform(random(400,800),random(275,400));
platforms.push(p6);

p7 = new Platform(random(1,400),random(300,500));
platforms.push(p7);

p8 = new Platform(375,100);
platforms.push(p8);

}

function draw() {
  background(222,184,135);
  stroke("black");
  strokeWeight(5);
  line(0,700,width,700);

for (let i = 0; i < platforms.length; i++) {
  platforms[i].drawPlatforms();
}

  joe.drawMe();
  joe.moveMe();
  joe.numberLives();

  flag.drawFlag();
  flag.win();



  if (frameCount % 75 == 0) {
        let  b = new Squares(random(0,width), 0, random(-1,1), random(1,3));
        squares.push(b);
        console.log(squares);
    }

  for (let i = 0; i < squares.length; i++) {
	 	      squares[i].drawSquares();
       	  squares[i].moveSquares();
        	squares[i].bounceSquares();
    }

    if (frameCount % 75 == 0) {
      let r = new Circles(random(0,width), 0, random(-1,1), random(1,3));
      circles.push(r);
      console.log(circles);
    }
for (let i = 0; i < circles.length; i++) {
  circles[i].drawCircles();
  circles[i].moveCircles();
  circles[i].bounceCircles();
}

}







class Sprite {

  constructor(x,y, xspeed, yspeed){
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed
  }

drawMe(){
  stroke(10);
  fill(280,125,110);
  ellipse(this.x,this.y,50,50);
  fill("black")
  ellipse(this.x+7,this.y-5,5,5)
  ellipse(this.x-7,this.y-5,5,5)
  bezier(this.x-10,this.y+10,this.x-1,this.y+13,this.x+1,this.y+13,this.x+10,this.y+10);
}


moveMe(){
  let hitPlatform = false;
  if (keyIsDown(UP_ARROW)){
    this.y -= this.yspeed;
  }
  else {
    for (let i = 0; i < platforms.length; i++) {
      let currentPlatform = platforms[i]
      if (this.x<currentPlatform.x+75 && this.x>currentPlatform.x){
        if (this.y+25<currentPlatform.y+8 && this.y+25>currentPlatform.y){
          hitPlatform=true
          console.log("hit platforms")
        }
      }
    }
    if (this.y >= liney){
      this.y = liney
    }
    else {
      if(hitPlatform===false){
        this.y += this.yspeed;
      }
    }
  }

  if (this.x-30 < -30){
    this.x = 800
  }

  if (this.x+30 > 830){
    this.x = 0
  }

  //if (keyIsDown(DOWN_ARROW)){
    //this.y += this.yspeed;
  //}

  if (keyIsDown(LEFT_ARROW)){
    this.x -= this.xspeed;
  }

  if(keyIsDown(RIGHT_ARROW)){
    this.x += this.xspeed;
  }
}//end of moveMe


numberLives(){
  textSize(50);
  fill("black");
  stroke("black");
if (hits.length >= 3) {
    text("Game Over", 290, 300);
    noLoop();
  } else if (hits.length == 2) {
    text("Lives: 1", 575, 50);
  } else if (hits.length == 1) {
    text("Lives: 2", 575, 50);
  } else if (hits.length == 0) {
    text("Lives: 3", 575, 50);
  }
}


} // end of class Sprite




class Squares {

  constructor(x,y, xspeed, yspeed){
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed
  }

  drawSquares() {
    stroke(1);
    strokeWeight(1);
    fill(155,198,146);
    rect(this.x,this.y,30,30);
  }

  moveSquares(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  bounceSquares(){
    if (this.x >= joe.x-25 && this.x <= joe.x+25 && this.y > joe.y-25 && this.y < joe.y+25){
        this.yspeed = -this.yspeed;
        this.y=this.y-10;
         hits.push("hit");
      }
    }
}//end of class squares




class Platform {

  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  drawPlatforms(){
    stroke(46,70,71);
    fill(191,220,223);
    strokeWeight(1.5)
    rect(this.x,this.y,75,8);
  }
}//end of class platforms



class Circles {

  constructor(x,y, xspeed, yspeed){
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed
  }

  drawCircles(){
    stroke(1);
    strokeWeight(1);
    fill(81,141,106);
    ellipse(this.x,this.y,30,30);
  }

  moveCircles(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  bounceCircles(){
    if (this.x >= joe.x-25 && this.x <= joe.x+25 && this.y >= joe.y-25 && this.y <= joe.y+25){
        this.yspeed = -this.yspeed;
        this.y=this.y-10;
         hits.push("hit");
  }
}
}//end of class circles

class Flag {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  drawFlag(){
    strokeWeight(3)
    line(this.x,this.y,this.x,this.y-25)
    rect(this.x,this.y-25,18,10)
  }

  win(){
    if (this.x >= joe.x-25 && this.x <= joe.x+25 && this.y-25 >= joe.y-25 && this.y-25 <= joe.y+25){
      text("You Win!",290,300)
      noLoop();
    }


  }
}
