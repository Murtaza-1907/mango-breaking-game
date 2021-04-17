class slingshot {
    constructor( bodyA,pointB){
    var options = 
    {
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.02
    }
    this.sling = Matter.Constraint.create(options)
    World.add(world,this.sling) 
    
    
    }
    fly(){
        this.sling.bodyA = null
    }
    
    display = function() 
    {
        if(this.sling.bodyA !==null){
    var pointA = this.sling.bodyA.position
    var pointB = this.sling.pointB;
    
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    }}
     
    attach = function(body)
    {
this.sling.bodyA = body



    }
    }