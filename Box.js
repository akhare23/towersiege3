class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            friction:1.0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("box.png");
        this.Visibility = 255;
        World.add(world,this.body);
        
    }
    score(){
        if(this.Visibility<0 && this.Visibility>-501){
            score = score + 1;
        }
    }
    display(){
        
        var pos = this.body.position;
        if(pos.y<550){
        imageMode(CENTER);
        fill("black");
        stroke("yellow")
        image(this.image,pos.x,pos.y,this.width,this.height);
        }
          else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            image(this.image,pos.x,pos.y,this.width,this.height);
            pop();
            
            }
        }
    }
