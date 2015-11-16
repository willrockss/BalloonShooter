	Crafty.c('BalloonObj', { 
	_collisionPoly : [1,11,4,31,13,43,29,43,38,20,34,3,16,-1],
	init: function() { 
	   this.requires("2D"); 
	   this.requires("Canvas"); 
	   this.requires("SpriteAnimation"); 
	   this.requires("Collision"); 
	   this.requires("MouseFace"); 
	   //this.requires("WiredHitBox");
	   this.requires("KillableObj"); 
	   this.requires("plast_balloon_spr");
	   this.attr({x: 0, y: 0}); 

	   this.collision(new Crafty.polygon(this._collisionPoly));
	   this.speed = 1;

	   this.bind("MouseMoved", function(e) { 
		  /* you can use following input params:
		  e.grad - degrees to mouse point vector
		  e.rad - angle to mouse point in radians
		  e.pos.x, e.pos.y - mouse position*/
		  //this.rotation = e.grad;
	   }); 
	   this.bind("EnterFrame", function() { 
		  this.y += this.speed;
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