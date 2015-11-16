	   Crafty.scene("loading", function() {
	      Crafty.e("fpsLabelObject");
		  Crafty.load(assetsObj, function() {

		     //Object to handle user click to load main scene
			 Crafty.e("2D, DOM, Mouse").attr({x:0, y:0, w:global.gameWidth, h:global.gameHeight}).
                 bind("Click", function() {
                    Crafty.scene("mainScene");
                 }
			 )
		  });


		  Crafty.sprite(37,123, "media/images/plast_balloon.png",  {plast_balloon_spr:[0,0]}); 
		  Crafty.sprite(72,206, "media/images/girl.png",  {girl_spr:[0,0]}); 
		  Crafty.sprite(8, "media/images/bullet.png",  {bullet_spr:[0,0]});
		  Crafty.sprite(71,29, "media/images/plast_hand_with_gun.png",  {plast_hand_with_gun_spr:[0,0]});

		  Crafty.e("2D, DOM, Text").attr({x:global.gameWidth / 2 - 100, y:130, w: 300 }).text("Click to play...");
	   }); 