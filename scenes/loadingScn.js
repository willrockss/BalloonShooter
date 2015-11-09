	   Crafty.scene("loading", function() { 
		  Crafty.load(assetsObj, function() { 
			 Crafty.e("2D, DOM, Mouse").attr({x:0, y:0, w:384, h:512}).bind("Click", function() { Crafty.scene("mainScene");}) 
		  }); 
		  Crafty.sprite(37,123, "media/images/plast_balloon.png",  {plast_balloon_spr:[0,0]}); 
		  Crafty.sprite(72,206, "media/images/girl.png",  {girl_spr:[0,0]}); 
		  //sprites_config['girl_spr'] = { attr: { originX: 28, originY: 60}};
		  Crafty.sprite(8, "media/images/bullet.png",  {bullet_spr:[0,0]}); 
		  //sprites_config['bullet_spr'] = { attr: { originX: 0, originY: 0}};
		  Crafty.sprite(71,29, "media/images/plast_hand_with_gun.png",  {plast_hand_with_gun_spr:[0,0]}); 
		 // sprites_config['plast_hand_with_gun_spr'] = { attr: { originX: 5, originY: 15}};
		  
		  Crafty.e("2D, DOM, Text").attr({x:global.gameWidth / 2 - 100, y:130, w: 300 }).text("Click to play..."); 
	   }); 