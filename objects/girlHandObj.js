Crafty.c('hand_game_object', {
	init: function() {
	   this.requires("2D"); 
	   this.requires("Canvas"); 
	   this.requires("SpriteAnimation"); 
	   this.requires("Collision"); 
	   this.requires("MouseFace"); 
	   this.requires("plast_hand_with_gun_spr");
	   this.origin(3, 9);
	   this.flipped = false;

	   this.bind("MouseMoved", function(e) { 
		  /* you can use following input params:
		  e.grad - degrees to mouse point vector
		  e.rad - angle to mouse point in radians
		  e.pos.x, e.pos.y - mouse position*/
		  this.mouse_x = e.pos.x;
		  this.mouse_y = e.pos.y;
		  this.rotation = e.grad;


          if (this.flipped == false && this.mouse_x < this.x) {
            this.flipped = true;
            this.flip("Y");
          } else if (this.flipped == true && this.mouse_x >= this.x) {
            this.flipped = false;
            this.unflip("Y");
          }
	   }); 

	   this.bind("MouseUp", function(e) { 
		  //Add action code here
		  if (e.button === 0) {
			// console.log('Bullet should be created right now. Mouse(' + this.mouse_x + ', ' + this.mouse_y + ')');
			var hand_length = 68;
			var angleOffset = -0.15;
			if (this.flipped) {angleOffset *= -1;}

			var bullet = instance_create(this.x + this._origin.x + Math.cos(this.getAngle()  + angleOffset) *hand_length, this.y  + this._origin.y + Math.sin(this.getAngle() + angleOffset) * hand_length, 'BulletObj');
			 bullet.angle = this.getAngle();
		  }
	   });
	}

});