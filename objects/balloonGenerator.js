	Crafty.c('BalloonGeneratorObj', { 
		init: function() { 
			this.current_time = 0,
			this.creation_interval = 1000,
		    this.bind("EnterFrame", function() { 
			  if (Date.now() > this.current_time + this.creation_interval) {
				 this.current_time = Date.now();
			     var balloon =   instance_create(getRandomArbitary(0, 384/*screen_width*/-37/*balloon.height*/), -153/*balloon.width*/, 'BalloonObj');
				
				 if (this.creation_interval > 600) {
					this.creation_interval -= 5;   
				 }
				 
			  }
		   }); 
		}
	});