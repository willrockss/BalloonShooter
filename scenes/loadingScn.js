	   function getRandomArbitary(min, max) {
           return Math.round(Math.random() * (max - min) + min);
       }

       function initVK(next) {
			//VK SCRIPT
			console.log('Trying to load VK API at ' + Date.now() +  '. Url is ' + document.location);
			if (document.location.host.indexOf('localhost') != -1 || (typeof variable == 'undefined')) {
			    console.log("It's not a VK context...");
			    if (next) next.call(this);
			    return;
			}

			VK.init(function() {
                // узнаём flashVars, переданные приложению GET запросом. Сохраняем их в переменную flashVars
                var parts=document.location.search.substr(1).split("&");
                var curr;
                global.flashVars = {};
                for (i=0; i<parts.length; i++) {
                    curr = parts[i].split('=');
                    // записываем в массив flashVars значения. Например: flashVars['viewer_id'] = 1;
                    global.flashVars[curr[0]] = curr[1];
                }

                global.isVKinit = true;
                console.log('Initialized successfully with flashVars params. viewer_id = ' + global.flashVars['viewer_id']);
                if (next) next.call(this);
			}, function() {
				console.log('VK API initialization failed :(');
				if (next) next.call(this);
			}, '5.40');
       }

       function checkServerAvailable(successHandler) {
           if (window.location.protocol == 'http:' || window.location.protocol == 'https:') {
               var myRequest = new XMLHttpRequest();
               myRequest.open('GET', '/ping');

               myRequest.send(null);

               myRequest.onreadystatechange = function() {
                 if (myRequest.readyState == 4) {
                    if(myRequest.status == 200) {
                        global.isServerAvailable = true;
                        console.log('Server is available.');
                        successHandler.call(this);
                    } else {
                        setUnavailableServer();
                    }
                 }
               }
           } else {
               setUnavailableServer('Unfortunately server is unavailable because of wrong protocol: ' + window.location.protocol);
           }
       }

       function setUnavailableServer(reason) {
         global.isServerAvailable = false;
         var msgRsn = '';
         if (reason) {
            msgRsn = reason;
         } else {
            msgRsn = 'Unfortunately server is unavailable :(';
         }
         console.log(msgRsn);
       }



       function login() {
           initVK( function () {
               checkServerAvailable( function(){
                    var myRequest = new XMLHttpRequest();
                    console.log('Trying to log in');
                    if (global.isVKinit) {
                        var viewer_id  = global.flashVars['viewer_id'];
                        var access_token = global.flashVars['access_token'];
                        myRequest.open('GET', '/login_me?user_id=' + viewer_id + '&access_token='+access_token);
                    } else {
                        myRequest.open('GET', '/login_me');
                    }

                    myRequest.send(null);

                    myRequest.onreadystatechange = function() {
                      if (myRequest.readyState == 4) {
                         if(myRequest.status == 200) {
                            var respObj = JSON.parse(myRequest.responseText);
                            if (respObj.user_id) {
                                global.user_id = respObj.user_id;
                                console.log("User was successfully logged in with id " + global.user_id);
                            } else {
                                console.log('Login error! Response is ' + myRequest.responseText);
                            }
                         } else {
                            console.log('Login error! Response is ' + myRequest.responseText);
                         }
                      }
                    };
               })
           });
       }

       function startGame() {
            //global.score = getRandomArbitary(1, 1000);

            login();

            //TODO For debug purposes just directly go to final scene
            //setTimeout(function() {Crafty.scene("finalScene");}, 2000);
            Crafty.scene("mainScene");
       }

	   Crafty.scene("loading", function() {
          Crafty.e("fpsLabelObject");
		  Crafty.load(assetsObj, function() {
		    startGame();


            /*
		     //Object to handle user click to load main scene
			 Crafty.e("2D, DOM, Mouse").attr({x:0, y:0, w:global.gameWidth, h:global.gameHeight}).
                 bind("Click", function() {
                    Crafty.scene("mainScene");
                 }
			 )
			 */
		  });


		  Crafty.sprite(37,123, "media/images/plast_balloon.png",  {plast_balloon_spr:[0,0]}); 
		  Crafty.sprite(72,206, "media/images/girl.png",  {girl_spr:[0,0]}); 
		  Crafty.sprite(8, "media/images/bullet.png",  {bullet_spr:[0,0]});
		  Crafty.sprite(65,18, "media/images/plast_hand_with_gun.png",  {plast_hand_with_gun_spr:[0,0]});

		  Crafty.e("2D, DOM, Text").attr({x:global.gameWidth / 2 - 100, y:130, w:300 }).text("Waiting for logging...");

	   }); 