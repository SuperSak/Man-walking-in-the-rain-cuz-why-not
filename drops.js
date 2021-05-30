class Drops{
    constructor(x,y){
        var options={
            restitution:0.7,
            friction:0.05,
            density:1.1
        }
        this.body = Bodies.circle(x,y,2,options)
        World.add(world, this.body)
        //console.log(this.body.position.y)
    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(pos.x, pos.y, 2, 2)
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x: random(0,400), y:0})
            Matter.Body.setVelocity(this.body, {x:0, y:0})
        }
    }
}