let b;
let anotherBall;
let thirdBall;
let cloud1;
let cloud2;




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
