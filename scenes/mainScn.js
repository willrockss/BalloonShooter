	   Crafty.scene("mainScene", function() { 
	   if (global.fpsObj == null) {
		  global.fpsObj = Crafty.e('2D, DOM, Text').attr({x:0, y:0, w: 300, frameCount: 0, fps: 0,  lastTime: Date.now()}).text('FPS: 0').bind('EnterFrame', function() {
			 this.frameCount++;
			 if (Date.now() - this.lastTime > 1000) {
				this.lastTime = Date.now();
				this.fps = this.frameCount;
				this.frameCount = 0;
				this.text('FPS: ' + this.fps);
			 }
		  });
	   }

		 Crafty.e("BalloonObj").attr({x: 76, y:238}); 
		 Crafty.e("BalloonObj").attr({x: 246, y:219}); 
		 Crafty.e("BalloonObj").attr({x: 158, y:254}); 
		 Crafty.e("BalloonGeneratorObj").attr({x: 0, y:0});

		 Crafty.e("scoreLabelObject").attr({x: 21, y:26}); 
		 girl = Crafty.e("GirlObj").attr({x: 150, y:335});
		 girl.shift(-girl._origin.x, -girl._origin.y); //TODO Put this functionality into X\Y setters
		var hand = Crafty.e("hand_game_object").attr({x: 150, y:335}); 
		hand.shift(-hand._origin.x, -hand._origin.y);
		 
	   }); 