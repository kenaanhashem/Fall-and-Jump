let joe;

function setup() {
  createCanvas(800, 800);
joe = new Sprite(width/1,200,4);
}

function draw() {
  background(220);
  joe.drawMe();
  joe.moveMe();

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


}
