class Dustbin {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true,
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("Images/dustbingreen.png");
        World.add(world, this.body);
        
    }

display() {
var pos = this.body.position; 
push();
imageMode(CENTER);
fill("green");
rect(pos.x,pos.y,this.width,this.height);
//imageMode(CENTER);
//image(this.image,pos.x,pos.y,100,100);
pop();





}






}