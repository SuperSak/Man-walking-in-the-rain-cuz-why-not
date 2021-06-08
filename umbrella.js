class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world, this.body)
        this.r = r*2
        this.x = x
        this.y = y
    }
    display(){
        this.Sprite = createSprite(this.x,this.y,this.r,this.r)
        this.Sprite.addImage( walking)
        this.Sprite.scale = 0.5
    }
}