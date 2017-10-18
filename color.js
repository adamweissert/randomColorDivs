for(var i = 0; i < 75; i++) {
        var color = '#'+Math.random().toString(16).substr(-6);  //"#"+((1<<24)*Math.random()|0).toString(16);
        var div = $('<div>').css('background-color', color);
        $('body').append(div);
        $('div').click(function(){
         $(this).css("background-color", '#'+Math.random().toString(16).substr(-6));
        });
    }