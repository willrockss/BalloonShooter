Crafty.c('fpsLabelObject', {
    init: function() {
       this.requires("2D");
       this.requires("DOM");
       this.requires("Text");
       this.attr({x:0, y:0, w:300, frameCount:0 , fps:0 ,  lastTime:Date.now()});
       this.text('FPS: N/A');
       this.bind(
       'EnterFrame',function() {
         this.frameCount++;
         if (Date.now() - this.lastTime > 1000) {
            this.lastTime = Date.now();
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.text('FPS: ' + this.fps);
         }
       });
    }

});