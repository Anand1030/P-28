class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 8,
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    retry(body){
        this.launcher.bodyA = body;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
            if(this.launcher.bodyA){
            var bodyA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4.5);
            line(bodyA.x,bodyA.y,pointB.x,pointB.y)
            }
    }
    
}