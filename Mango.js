class Mango{

    constructor(x,y){

        var options = {

            isStatic: true,
            restitution: 0,
            friction: 1

        }

        this.body = Bodies.circle(x,y,30,options);
        this.image = loadImage("mango.png");
        World.add(world,this.body);

    }

    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 30, 30);
        pop(); 

    }

}