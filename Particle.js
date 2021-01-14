class Particle{
    constructor(x,y,r){
        var options = {
            isStatic= true
        }
        this.bodies=bodies.rectangle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255), random(0,255))
        this.r=r
        World.add(world,this.body)
    }
    display() {
        var pos=this.body.position;
        rectMode(CENTER);
        fill(white);
        rect(pos.x, pos.y, this.w, this.h);
    }
}