Crafty.c('scoreLabelObject', {
	init: function() { 
	   this.requires("2D"); 
	   this.requires("Canvas"); 
	   this.requires("SpriteAnimation"); 
	   this.requires("Collision"); 
	   this.requires("MouseFace"); 
	   this.requires("SpriteText");
	   this.registerFont("NumbersFnt64x64", 64, 'media/images/NumbersFnt64x64.png', ' 0123456789');
	   this.attr({x:0, y:0, z:500});
	   this.text('0');
	   this.prevValue = -1;
	   this.bind("EnterFrame", function() { 
			if (this.prevValue != global.count) {
				this.prevValue = global.count;
				console.log("Score: " + global.count);    
				this.text(global.count);
			}
	   }); 
	}
});