	Crafty.c('KillableObj', { 
		init: function() {
			this._kill_me = false;

		    this.bind("EnterFrame", function() { 
				  if (this._kill_me === true) {
					this.destroy();
				  }
		   }); 
		},
	
		killMe: function() {
			this._kill_me = true;
		}
	});