class Rope{
    constructor(mybodyA,pointB){
        var option={
            bodyA:mybodyA,
            pointB:pointB,
            length:250,
            stiffness:1.2
        }
        this.pointB=pointB;
        this.rope=Constraint.create(option);
        World.add(world,this.rope);
    }
    display(){
        push(); 
        stroke("brown");
        strokeWeight(3);
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
        pop();
    }
}