let joe;
let squares = [];

function setup() {
  createCanvas(800, 800);
joe = new Sprite(width/1,200,4);
}

function draw() {
  background(220);

  joe.drawMe();
  joe.moveMe();

  if (frameCount % 25 == 0) {
        let  b = new Squares(random(0,width), 0, random(-1,1), random(1,3));
        squares.push(b);
        console.log(squares);
    }

  for (let i = 0; i < squares.length; i++) {
	 	      squares[i].drawSquares();
       	  squares[i].moveSquares();
        	squares[i].bounceSquares();
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
  fill("blue");
  ellipse(this.x,this.y,50,50);
  fill("black")
  ellipse(this.x+7,this.y-5,5,5)
  ellipse(this.x-7,this.y-5,5,5)
}


moveMe(){
  if (keyIsDown(UP_ARROW)){
    this.y -= this.speed;
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

  drawSquares(){
    stroke(1);
    strokeWeight(1);
    fill("green");
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
}
