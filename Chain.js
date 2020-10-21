class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.05,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.chain);
    }
    attach(body){
        this.chain.bodyA = body;
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA){
        var bodyA = this.chain.bodyA.position;
        var pointB = this.pointB;
        line(bodyA.x,bodyA.y,pointB.x,pointB.y);
        }
    }
}