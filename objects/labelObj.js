	Crafty.c('scoreLabelObject', { 
	init: function() { 
	   this.requires("2D"); 
	   this.requires("Canvas"); 
	   this.requires("SpriteAnimation"); 
	   this.requires("Collision"); 
	   this.requires("MouseFace"); 
	   this.requires("SpriteText");
	   this.registerFont("OSDM_Fnt32x32_SyntaxTerror-Copy2_fnt", 32, 'media/images/OSDM_Fnt32x32_SyntaxTerror-Copy2.png');
	   this.attr({x: 0, y: 0}); 
	   this.text('Score: ');
	   this.prevValue = -1;
	   this.bind("EnterFrame", function() { 
			if (this.prevValue != global.count) {
				this.prevValue = global.count;
				console.log("Score: " + global.count);    
				this.text("Score: " + global.count);
			}
	   }); 
	   this.bind("KeyDown", function(e) { 
	   }); 
	   this.bind("KeyUp", function(e) { 
	   }); 
	} 
	}); 