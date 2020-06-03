class Dustbin{
    
    constructor(){
        var box1,box2, box3;
        var options = {}    

        this.body = Bodies.rectangle(width/1.3-100, 650, 20, 80 , {isStatic:true} );
        World.add(world, this.body);

        this.body = Bodies.rectangle(width/1.3+100, 650, 20, 80 , {isStatic:true} );
        World.add(world, this.body);
        
        this.body   = Bodies.rectangle(width/1.3, 650, 160, 20 , {isStatic:true} );
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, 160, 20);
    
        pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x-90, pos.y-30, 20, 80);
    
        pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x+90, pos.y-30, 20, 80);
    }
}