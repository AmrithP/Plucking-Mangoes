class Ground{

    constructor(){

        var options = {

            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2

        }

      this.body = Bodies.rectangle(400, 600, 800, 25, options);
      this.width = 800;
      this.height = 25;
      
      World.add(world, this.body);

    }

    display(){

        rectMode(CENTER);
        rect(400, 600, this.width, this.height);

    }



}