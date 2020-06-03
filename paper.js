class Paper{
    constructor(x,y){
      var  options= {
          isStatic: false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }

      this.body = Bodies.circle(x, y, 18,options);   
      this.x=x;
      this.y=y;
      World.add(world,this.body);
    }

    display(){
       var pos = this.body.position;  
       fill("yellow");  
       ellipseMode(RADIUS);
       ellipse(pos.x, pos.y, 20,20);
       

    }
}
