

function dragdrop(box,text)
{	
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
        $('.input1').css({
		'border':'0px solid red',
		'background-color':'transparent',
		});

            $(this)
                .css({
                    "border": "0px solid red",
                    "text-align": "center"
                })
            $('#'+text).css('color','blue');
            $('#'+text).css('cursor','default');
			var $this = $(this);
    ui.draggable.position({
      my: "center",
      at: "center",
      of: $this,
      using: function(pos) {
        $(this).animate(pos, 200, "linear");
      }
    });
      $('#' + text + ' .highlightsearch').removeClass('highlightsearch');
        }
    });

$('#'+text).draggable({
        revert: 'invalid',
		start: function(event, ui) {
        $('.input1').css({
		'border':'1px solid gray','border-radius':'5px'
		});
		},
        stop: function() {
        $('.input1').css({
		'border':'0px solid red',
		'border-radius':'0',
		});
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
}






