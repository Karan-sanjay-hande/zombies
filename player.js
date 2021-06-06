class player extends BaseClass{
    constructor(x, y) {
       super(x,y,50,50)  
       this.image = loadImage("images/player.gif");
       this.image.scale=0.2;
      }

}