class Boy
{
    constructor(){

        this.image = loadImage("boy.png")
        
    }

        display(){

          imageMode(CENTER);
          image(this.image, 175, 500, 175, 275);
        
        }
}