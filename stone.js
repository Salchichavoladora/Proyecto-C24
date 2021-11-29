class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options = {
		'density' :12,
      'friction' : 0.9,
	  'restitution':0.8,
	}

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

	}
	display()
	{
        var pos =this.body.position;
        rectMode(CENTER);
        fill("purple");
        rect(pos.x, pos.y, this.width, this.height);
	}

}