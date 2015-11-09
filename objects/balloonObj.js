	Crafty.c('BalloonObj', { 
	_collisionPoly : [1,11,4,31,13,43,29,43,38,20,34,3,16,-1],
	init: function() { 
	   this.requires("2D"); 
	   this.requires("Canvas"); 
	   this.requires("SpriteAnimation"); 
	   this.requires("Collision"); 
	   this.requires("MouseFace"); 
	   this.requires("SolidHitBox"); 
	   this.requires("KillableObj"); 
	   this.requires("plast_balloon_spr");
	   this.attr({x: 0, y: 0}); 

	   //ToDo Uncomment after debug
	   //this.collision(15,5,27,2,37,8,42,24,35,48,15,47,7,25,6,14); 
	   this.collision(new Crafty.polygon(this._collisionPoly));
	   this.speed = 1;
	   
	   //this.kill_me = false;
	   this.bind("MouseUp", function(e) { 
		  //Add action code here
		  
		  
		  // shoot - create bullet
		  /*
					  Crafty.e("2D, DOM, Color")
					  .attr({
						  x: this.x, y: this.y, z: 1,
						  w: 3, h: 3,
						  speed: 10,
						  angle: this.getAngle()
					  })
					  .color("#FA5656")
					  .bind("EnterFrame", function(frame) {
						  this.x += Math.cos(this.angle) * this.speed;
						  this.y += Math.sin(this.angle) * this.speed;
						// destroy ...
					  });
		  */
	   }); 
	   this.bind("MouseMoved", function(e) { 
		  /* you can use following input params:
		  e.grad - degrees to mouse point vector
		  e.rad - angle to mouse point in radians
		  e.pos.x, e.pos.y - mouse position*/
		  //this.rotation = e.grad;
	   }); 
	   this.bind("EnterFrame", function() { 
		  //Add action code here
		  this.y += this.speed;
		  
		 /* if (this.kill_me === true) {
			this.destroy();
		  }*/
	   }); 
	   this.onHit("BulletObj", this.onHitWithbullet_obj, function(e) { this.last_hit_with_bullet_obj = null;});
	   this.bind("KeyDown", function(e) { 
	   }); 
	   this.bind("KeyUp", function(e) { 
	   }); 
	} 
	,
	onHitWithbullet_obj: function(e, dontCallOther) {
	   var otherObj = e[0].obj;
	   if (this.last_hit_with_bullet_obj != otherObj) {
		  //Add action code here
		  global.count++;
		  this.killMe();
		  //this.kill_me = true;
		  if (!dontCallOther) {
			 if (typeof otherObj.onHitWithBulletObj === 'function') {
				var hitdata = otherObj.hit('plast_balloon_spr');
				if (hitdata) {
				   //justHit = true;
					  otherObj.onHitWithBulletObj(hitdata, true);
				}
			 }
		  }
	   }
	}
	}); 