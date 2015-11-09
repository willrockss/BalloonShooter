		var sprites_config = {}; 

		var global = {
			count: 0,
			
			fpsLimit: 60,
			
			gameHeight: 384,
			gameWidth: 512,
			
			backgroundColorParam: 'rgb(0, 162, 232)'
		}; 

		var assetsObj = {
		"images": [
				  "media/images/plast_balloon.png",
				  "media/images/OSDM_Fnt32x32_SyntaxTerror-Copy2.png",
				  "media/images/girl.png",
				  "media/images/bullet.png",
				  "media/images/plast_hand_with_gun.png"]
		};

	// Lounch first scene
	Crafty.timer.steptype('variable', global.fpsLimit);
	Crafty.init(global.gameHeight, global.gameWidth);
	Crafty.background(global.backgroundColorParam);
	Crafty.scene("loading");