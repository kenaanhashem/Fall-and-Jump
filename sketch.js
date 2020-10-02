<<<<<<< Updated upstream
let b;
let anotherBall;
let thirdBall;
let cloud1;
let cloud2;



=======
let joe;
let balls = [];

function setup() {
  createCanvas(800, 800);
joe = new Sprite(width/1,200,4);

}

function draw() {
  background(220);
  joe.drawMe();
  joe.moveMe();

  if (frameCount % 25 == 0) {
        let  b = new Ball(random(width), 0, -3);
        balls.push(b);
        console.log(balls);
      }

  	for (let i = 0; i < balls.length; i++) {
  	 	      balls[i].drawBall();
         	  balls[i].moveBall();
          	balls[i].bounceBall();
  	  }

}

class Ball {
  constructor(x,y, speed){
    this.x = x;

this.y = y;
this.speed = speed;
  }

  drawBall(){
    stroke(0);
    strokeWeight(1);
    fill("red");
      ellipse(this.x,this.y,10,10);
  }
  moveBall(){
    this.x = this.x+ this.speed;
    this.y = this.y+5;
  }

  bounceBall(){
    if (this.x >= joe.x-15 && this.x <= joe.x+15 && this.y > joe.y-40 && this.y < joe.y+40){
      this.speed = -this.speed;
    }
  }

}









class Sprite {
>>>>>>> Stashed changes

function setup() {
  createCanvas(800, 400);
  b = new Ball(90, 150,"blue");
  thirdBall = new Ball(40, 60, "red");
  anotherBall = new Ball(100,20,"orange");
  cloud1 = new Cloud(200,150);
  cloud2 = new Cloud(150,350);
}


function draw(){
	background("green");
  background("green");
      b.drawBall();
      b.moveBall();
      anotherBall.drawBall();
      anotherBall.moveBall();
      cloud1.drawCloud();
      cloud1.moveCloud();
      cloud2.drawCloud();
      cloud2.moveCloud();

<<<<<<< Updated upstream
=======
drawMe(){
  stroke(10);
  fill("blue");
  ellipse(this.x,this.y,75,75);
  fill("black")
  ellipse(this.x+7,this.y-5,5,5)
  ellipse(this.x-7,this.y-5,5,5)
>>>>>>> Stashed changes
}


class Ball{

  constructor(x,y,color){
		this.x = x;
    		this.y = y;
           this.color = color;
	  }
  drawBall(){
    stroke(2);
    fill(this.color);
    ellipse(this.x,this.y,10,10);
	}

  moveBall(){
    this.x = this.x+2;
    this.y = this.y+.5;
  }
}


class Cloud {

	constructor(x,y){
    		this.x = x;
        this.y = y;

	}
	drawCloud(){
    		noStroke();
    		fill(255);
		    ellipse(this.x, this.y, 60, 60);
        ellipse(this.x + 30, this.y, 60, 60);
        ellipse(this.x + 20, this.y - 30, 60, 60);
	}
  moveCloud(){
    this.x = this.x + 0.5
  }
}
