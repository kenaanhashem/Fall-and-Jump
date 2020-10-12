let joe;
let squares = [];
let liney = 671;
let platforms = [];
let circles = [];


function setup() {
  createCanvas(800, 700);
joe = new Sprite(30,650,5);

p = new Platform(200,500);
platforms.push(p)

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

  constructor(x,y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
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
    this.y -= this.speed;
  }
  else {
    for (let i = 0; i < platforms.length; i++) {
      let currentPlatform = platforms[i]
      if (this.x<currentPlatform.x+75 && this.x>currentPlatform.x){
        if (this.y<currentPlatform.y+3 && this.y>currentPlatform.y){
          hitPlatform=true
          console.log("hit platforms")
        }
      }
    }
    if (this.y <= liney){
      this.y = liney
    }
    else {
      if(hitPlatform===false){
        this.y += this.speed;
      }
    }
  }

  if (keyIsDown(DOWN_ARROW)){
    this.y += this.speed;
  }

  if (keyIsDown(LEFT_ARROW)){
    this.x -= this.speed;
  }

  if(keyIsDown(RIGHT_ARROW)){
    this.x += this.speed;
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
    if (this.x >= joe.x-15 && this.x <= joe.x+15 && this.y > joe.y-40 && this.y < joe.y+40){
        this.yspeed = -this.yspeed;
        this.y=this.y-10;
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
    rect(this.x,this.y,75,5);
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
    if (this.x >= joe.x-15 && this.x <= joe.x+15 && this.y > joe.y-40 && this.y < joe.y+40){
        this.yspeed = -this.yspeed;
        this.y=this.y-10;
  }
}
}//end of class circles
