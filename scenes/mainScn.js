Crafty.defineScene("mainScene", function() {

    var generator = Crafty.e("BalloonGeneratorObj").attr({x: 0, y:0});

    Crafty.e("scoreLabelObject").attr({x: 21, y:26});

    var hand = Crafty.e("hand_game_object").attr({x: 150, y:335, z:1, _generator: generator});
    hand.shift(-hand._origin.x, -hand._origin.y);

    girl = Crafty.e("GirlObj").attr({x: 150, y:335, z:0});
    girl.shift(-girl._origin.x, -girl._origin.y); //TODO Put this functionality into X\Y setters
    girl.attach(hand);

    Crafty.audio.play('mainSceneMusic', -1);

}, function() {
    if (Crafty.audio.isPlaying('mainSceneMusic')) {
        Crafty.audio.stop('mainSceneMusic');
    }
});