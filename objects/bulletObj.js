Crafty.c('BulletObj', { 
	_collisionPoly : [5,5,4,6,2,3],
	init: function() { 
	   this.requires("2D"); 
	   this.requires("Canvas"); 
	   this.requires("SpriteAnimation"); 
	   this.requires("Collision"); 
	   this.requires("MouseFace"); 
	   this.requires("SolidHitBox"); 
	   this.requires("KillableObj"); 
	   
	   this.requires("bullet_spr");
	//this.origin(sprites_config['bullet_spr'].attr.originX, sprites_config['bullet_spr'].attr.originY);
	   this.attr({x: 0, y: 0}); 
	   this.collision(new Crafty.polygon(this._collisionPoly));
	   this.bind("EnterFrame", function() { 
		  //Add action code here
		  this.x += Math.cos(this.angle) * this.speed;
		  this.y += Math.sin(this.angle) * this.speed;
		  
	   }); 
	   //Add action code here
	   this.speed = 3;
	   this.angle = 0;
	   this.onHit("BulletObj", this.onHitWithBulletObj, function(e) { this.last_hit_with_star_game_object = null;});
	   this.bind("KeyDown", function(e) { 
	   }); 
	   this.bind("KeyUp", function(e) { 
	   }); 
	} ,

	onHitWithBulletObj: function(e, dontCallOther) {
	   var otherObj = e[0].obj;
	   if (this.last_hit_with_star_game_object != otherObj) {
		  //Add action code here
		  this.killMe();
		  if (!dontCallOther) {
			 if (typeof otherObj.onHitWithbullet_obj === 'function') {
				var hitdata = otherObj.hit('bullet_spr');
				if (hitdata) {
				   //justHit = true;
					  otherObj.onHitWithbullet_obj(hitdata, true);
				}
			 }
		  }
	   }
	},
	
}); 