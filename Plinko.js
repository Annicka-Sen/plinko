class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic= true
        }
        this.bodies=bodies.rectangle(x,y,this.r,options);
        this.r=10;
        World.add(world,this.body)
    }
    display() {
        var pos=this.body.position;
        rectMode(CENTER);
        fill(white);
        rect(pos.x, pos.y, this.r);
    }
}