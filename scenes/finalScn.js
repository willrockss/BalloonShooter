//TODO move this function to special network module
function get_score_table(callback, error_callback) {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', '/get_score_table?reqUUID=' + (new Date().getTime()) + '&user_id=' + global.user_id);
    myRequest.send(null);

    myRequest.onreadystatechange = function() {
      if (myRequest.readyState == 4) {
         if(myRequest.status == 200) {
           var data = myRequest.responseText;
           console.log('get_score_table function received following response: ' + data);
           callback.call(this, JSON.parse(data).response);
         } else {
            error_callback.call(this);
         }
      }
    };
}

function post_score() {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', '/add_score?user_id=' + global.user_id + "&score=" + global.score);
    myRequest.send(null);
}

function drawScoreTable(startPoint, rowHeight, scoreArray) {
    console.log('Drawing score table for user: ' + global.user_id);
    scoreArray.forEach(function(item, index){
      var coordAttrs = {x:startPoint.x, y:startPoint.y + index * rowHeight, w: global.gameWidth };
      var text = item.position + ') ' + item.user_name + ' : ' + item.score;
      var labelObj = Crafty.e("2D, DOM, Text").attr(coordAttrs).text(text);
      console.log('global.user_id: '+global.user_id+' item.user_id: ' + item.user_id);
      if (global.user_id == item.user_id) {
        labelObj.textColor('rgb(0, 0, 255)');
      }
    });
}


Crafty.scene("finalScene", function() {
    var charHeight = 14;
    var msg = 'Вы набрали ' + global.score + ' очков!';

    var centerXpos = global.gameWidth / 2;
    console.log('centerXpos: ' + centerXpos);

    var textOffset = charHeight * msg.length / 2;
    console.log('textOffset: ' + textOffset);
    global.scoreLabel = Crafty.e("2D, DOM, Text").attr({x: centerXpos - textOffset, y:50, w:300 }).text(msg);

    if(global.isServerAvailable) {
        //Fist of all sent current score to the server
        post_score();

        Crafty.e("2D, DOM, Text").attr({x:100, y:150, w:300 }).text('Результаты лучших игроков:');

        var startPoint = {x:100, y:200};
        var rowHeight = 15;

        get_score_table(
            function(data){
                console.log('Trying to draw score data: ' + JSON.stringify(data));
                drawScoreTable(startPoint, rowHeight, data);
            },
            function(){
                alert('Error! Using default test array');
                var testScoreTable = [{"position":"1", "user_name":"Ivan", "score": 1000}, {"position":"3","user_name":"Kirill", "score": 800}, {"position":"2","user_name":"Alex", "score": 900}];
                drawScoreTable(startPoint, rowHeight, testScoreTable);
            }
        );
    } else {
        Crafty.e("2D, DOM, Text").attr({x:100, y:150, w:300 }).text('К сожалению сервер недоступен :(');
    }

});