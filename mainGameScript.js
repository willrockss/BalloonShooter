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
				  "media/images/NumbersFnt64x64.png",
				  "media/images/girl.png",
				  "media/images/bullet.png",
				  "media/images/plast_hand_with_gun.png"]
		};

	// Launch first scene
	Crafty.timer.steptype('variable', global.fpsLimit);
	Crafty.init(global.gameHeight, global.gameWidth);
	Crafty.background(global.backgroundColorParam);
	Crafty.scene("loading");