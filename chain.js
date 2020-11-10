class chain{
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:250
          }
          this.bodyA = bodyA;this.pointB = pointB;
          this.body = Constraint.create(option);
          World.add(world,this.body);
    }

    display(){

        var pos$a = this.body.bodyA.position;
        var pos$b = this.pointB;

        stroke("white");
        line(pos$a.x,pos$a.y-40,pos$b.x,pos$b.y);
    }
}