class Bob{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
      }
      this.y=y;
      this.x=x;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world,this.body);

    }
    display(){
        var paperos = this.body.position;
      
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill (255,0,255);
        ellipse(paperos.x,paperos.y,this.r);
       
        
    }
}
