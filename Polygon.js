class Polygon{
    constructor(x,y,w,h){
        var options = {
            density:3
        }
        this.body = Bodies.rectangle(x,y,w,h);
        this.image = loadImage("coolPolygon.png");
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    }
}