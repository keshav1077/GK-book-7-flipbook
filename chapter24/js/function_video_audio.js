function video_audio(pops, video, audio) {
var vid = document.getElementById(video);
var aid = document.getElementById(audio);
aid.play();
$('#'+pops).bPopup({
zIndex:2,
modalClose: false,
onClose: function() { 
vid.pause();    
vid.currentTime=0;
aid.pause();    
aid.currentTime=0;
},
});
if(vid.paused) {
	aid.play();
	vid.play();
} else {
	aid.pause();
	aid.pause();
}
}

function videoon(audio,video) {
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
aid.play();
vid.play();
}

function videooff(audio,video) {
var aid = document.getElementById(audio);
var vid = document.getElementById(video);	
aid.pause();
vid.pause();
}

function audiooff(audio,video) {
var aid = document.getElementById(audio);
var vid = document.getElementById(video);	
aid.pause();
vid.pause();
console.log(aid.currentTime);
if(vid.currentTime == vid.duration) {
vid.currentTime=0;
aid.currentTime=0;
}
}



function for_videoon1(audio,video) {
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
vid.play();
aid.play();
if(vid.play) {
	aid.play();
} else {
	aid.pause();
}
}

function for_popup1_v(pops, pbutton, video) {
var vid = document.getElementById(video);
$('#'+pops).bPopup({
zIndex:2,
modalClose: false,
onClose: function() { 
vid.pause();    
vid.currentTime=0;
$('#'+pbutton).find('.play').removeClass('dnone');
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
},
});
vid.play();
}

function for_popup(pops, pbutton, audio, video)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
$('#'+pops).bPopup({
zIndex:100,
modalClose: false,
onClose: function() { 
vid.pause();	
aid.pause(); 
vid.currentTime=0;
aid.currentTime=0;
$('#'+pbutton).find('.play').removeClass('dnone');
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
},
});
}

function for_pbutton(pbutton,audio,video)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
if(aid.paused)
{
aid.play();
vid.play();
$('#'+pbutton).find('.play').addClass('dnone'); 
$('#'+pbutton).find('.pause').removeClass('dnone');
$('.click_to_play').html('Click to Pause');
}
else	
{
aid.pause();
vid.pause();
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}

}

function for_fullfs(videofs,video)
{
var elem = document.getElementById(video);
if (elem.requestFullscreen) {
elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
elem.webkitRequestFullscreen();
}
}

function for_videoon(audio,video,pbutton)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
aid.play();
vid.play();
$('#'+pbutton).find('.play').addClass('dnone'); 
$('#'+pbutton).find('.pause').removeClass('dnone');
$('.click_to_play').html('Click to Pause');
}

function for_videooff(audio,video,pbutton)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);	
aid.pause();
vid.pause();
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}

function for_link(audio,video,link)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
aid.pause();
vid.pause();
}

function for_link_video(video,link)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
aid.pause();
vid.pause();
}

function for_popupa(pops, pbutton, audio)
{
var aid = document.getElementById(audio);
$('#'+pops).bPopup({
zIndex:2,
modalClose: false,
onClose: function() { 
aid.pause(); 
aid.currentTime=0;
$('#'+pbutton).find('.play').removeClass('dnone');
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
},
});
}

function for_pbuttona(audio,pbutton)
{
var aid = document.getElementById(audio);
if(aid.paused)
{
aid.play();
$('#'+pbutton).find('.pause').removeClass('dnone');
$('#'+pbutton).find('.play').addClass('dnone');
$('.click_to_play').html('Click to Pause');
}
else	
{
aid.pause();
$('#'+pbutton).find('.play').removeClass('dnone');
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}
}

function for_linka(audio,pbutton)
{
var aid = document.getElementById(audio);
aid.pause();
$('#'+pbutton).find('.play').removeClass('dnone');
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');

}

function clickonce2(id2)
{
		$("#"+id2).parents().prevAll().find('.hvr').css('opacity','1');
		$("#"+id2).parents().nextAll().find('.hvr').css('opacity','1');
		$("#"+id2).siblings().css('opacity','1');
}	

function for_audiooff(audio,video,pbutton)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);	
aid.pause();
vid.pause();
console.log(aid.currentTime);
if(aid.currentTime == aid.duration)
{
vid.currentTime=0;
}
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}

function for_pbutton_v(pbutton,audio,video)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
if(aid.paused == true && vid.paused == true)
{
	if(aid.currentTime == aid.duration && vid.currentTime != vid.duration)
	{
		vid.play();
		aid.pause();
		$('#'+pbutton).find('.play').addClass('dnone'); 
		$('#'+pbutton).find('.pause').removeClass('dnone');
		$('.click_to_play').html('Click to Pause');
	}
	else if(aid.currentTime == aid.duration && vid.currentTime == vid.duration)
	{
	vid.play();
	aid.play();
	$('#'+pbutton).find('.play').addClass('dnone'); 
	$('#'+pbutton).find('.pause').removeClass('dnone');
	$('.click_to_play').html('Click to Pause');
	} 
	else
	{
	aid.play();
	vid.play();
	$('#'+pbutton).find('.play').addClass('dnone'); 
	$('#'+pbutton).find('.pause').removeClass('dnone');
	$('.click_to_play').html('Click to Pause');
	}
}
else	
{
aid.pause();
vid.pause();
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}
}



function for_videoon_v(audio,video,pbutton)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
vid.play();
if(aid.currentTime == aid.duration)
{
	aid.pause();
}
else
{
	aid.play();
}

$('#'+pbutton).find('.play').addClass('dnone'); 
$('#'+pbutton).find('.pause').removeClass('dnone');
$('.click_to_play').html('Click to Pause');
}

function for_audiooffa(audio,pbutton)
{
var aid = document.getElementById(audio);
aid.pause();
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}

function dragdrop_withpopup(box,text,no)
{
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
        $('.input1').css({
		'border':'0px solid red',
		'background-color':'transparent'	
		});
            $(this)
                .css({
                    "border": "0px solid red",
                    "text-align": "center"
                })
            $('#'+text).css('color', 'blue');
			$('#'+text).bind('touchstart click',function(e){
			for_popupa('pops'+no,'pbutton'+no,'audio'+no);
			});
var $this = $(this);
ui.draggable.position({
	my: "center",
	at: "center",
	of: $this,
	using: function(pos) {
	$(this).animate(pos, 200, "linear");
    }
});
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
		});
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
}


function dragdrop_withpopup1(box,text,no)
{
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
        $('.input2').css({
		'border':'0px solid red',
		'background-color':'transparent'	
		});
            $(this)
                .css({
                    "border": "0px solid red",
                    "text-align": "center"
                })
            $('#'+text).css('color', 'blue');
			$('#'+text).bind('touchstart click',function(e){
			for_popupa('pops'+no,'pbutton'+no,'audio'+no);
			});
var $this = $(this);
ui.draggable.position({
	my: "center",
	at: "center",
	of: $this,
	using: function(pos) {
	$(this).animate(pos, 200, "linear");
    }
});
        }
    });

$('#'+text).draggable({
        revert: 'invalid',
		start: function(event, ui) {
        $('.input2').css({
		'border':'1px solid gray','border-radius':'5px'
		});
		},
        stop: function() {
        $('.input2').css({
		'border':'0px solid red',
		});
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
}

function dragdrop_withpopup_v(box,text,no) {
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
        $('.input1').css({
		'border':'0px solid red',
		'background-color':'transparent'	
		});
            $(this)
                .css({
                    "border": "0px solid red",
                    "text-align": "center"
                })
            $('#'+text).css('color', 'blue');
			$('#'+box).css('cursor','pointer');
			$('#'+box).bind('touchstart click',function(e){
			for_popup('pops'+no,'pbutton'+no,'audio'+no,'video'+no);
			});
var $this = $(this);
ui.draggable.position({
	my: "center",
	at: "center",
	of: $this,
	using: function(pos) {
	$(this).animate(pos, 200, "linear");
    }
});
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
		});
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
}

function dragdrop_withpopup_v1(box,text,no) {
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
        $('.input2').css({
		'border':'0px solid red',
		'background-color':'transparent'	
		});
            $(this)
                .css({
                    "border": "0px solid red",
                    "text-align": "center"
                })
            $('#'+text).css('color', 'blue');
			$('#'+box).css('cursor','pointer');
			$('#'+box).bind('touchstart click',function(e){
			for_popup('pops'+no,'pbutton'+no,'audio'+no,'video'+no);
			});
var $this = $(this);
ui.draggable.position({
	my: "center",
	at: "center",
	of: $this,
	using: function(pos) {
	$(this).animate(pos, 200, "linear");
    }
});
        }
    });

$('#'+text).draggable({
        revert: 'invalid',
		start: function(event, ui) {
        $('.input2').css({
		'border':'1px solid gray','border-radius':'5px'
		});
		},
        stop: function() {
        $('.input2').css({
		'border':'0px solid red',
		});
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
}

function dragdrop_withpopup_a(box,text,no)
{
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
        $('.input1').css({
		'border':'0px solid red',
		'background-color':'transparent'	
		});
            $(this)
                .css({
                    "border": "0px solid red",
                    "text-align": "center"
                })
            $('#'+text).css('color', 'blue');
            $('#'+box).css('cursor', 'pointer');
			$('#'+box).bind('touchstart click',function(e){
			for_popupa('pops'+no,'pbutton'+no,'audio'+no);
			});
var $this = $(this);
ui.draggable.position({
	my: "center",
	at: "center",
	of: $this,
	using: function(pos) {
	$(this).animate(pos, 200, "linear");
    }
});
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
		});
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
}

function dragdrop_withpopup_a1(box,text,no)
{
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
        $('.input2').css({
		'border':'0px solid red',
		'background-color':'transparent'	
		});
            $(this)
                .css({
                    "border": "0px solid red",
                    "text-align": "center"
                })
            $('#'+text).css('color', 'blue');
            $('#'+box).css('cursor', 'pointer');
			$('#'+box).bind('touchstart click',function(e){
			for_popupa('pops'+no,'pbutton'+no,'audio'+no);
			});
var $this = $(this);
ui.draggable.position({
	my: "center",
	at: "center",
	of: $this,
	using: function(pos) {
	$(this).animate(pos, 200, "linear");
    }
});
        }
    });

$('#'+text).draggable({
        revert: 'invalid',
		start: function(event, ui) {
        $('.input2').css({
		'border':'1px solid gray','border-radius':'5px'
		});
		},
        stop: function() {
        $('.input2').css({
		'border':'0px solid red',
		});
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
}


function for_popupi(pops)
{
$('#'+pops).bPopup({
zIndex:100,
modalClose: false,
onClose: function() { 
},
});
}

function opacDiv(div){
	$('#'+div).parents().children().children().css('opacity','1');
	$('#'+div).parents().children().css('opacity','1');
	$('#'+div).siblings().css('opacity','1');
	$('#'+div).css('opacity','0.5');
}

function opacDiv_border(div){
	$('#'+div).parents().children().children().css('opacity','1');
	$('#'+div).parents().children().css({'opacity':'1','border':'0px solid blue'});
	$('#'+div).siblings().css({'opacity':'1','border':'0px solid blue'});
	$('#'+div).css({'opacity':'0.5','border':'2px solid blue'});
}

function opacthis(div){
	$('#'+div).siblings().css('opacity','1');
	$('#'+div).css('opacity','0.5');
}


function dragdrop_transform(box,text)
{	
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
			$('.input1').css({
				'border':'0px solid red',
				'background-color':'transparent',
			});

			$(this).css({
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
				
				var transformDropBox = $(event.target).css('transform');
				var topDropBox = parseInt($(event.target).css('top'));
				var leftDropBox = parseInt($(event.target).css('left'));
				$(ui.draggable).css({transform: transformDropBox});
				
				var line_height = ($(ui.draggable).text().length <= 22)? "30px" : "15px";
				
				$(this).animate({"top": topDropBox, "left": leftDropBox, "width": "129px", "line-height": line_height, "height": "30px"}, 200, "linear");
				var _this = this;
				setTimeout(function(){
					$(_this).css({"white-space": "unset", "text-align": "center"});
					console.log(_this);
				}, 200);
				
				console.log("top: ", topDropBox, ", left: ", leftDropBox);
			  }
			});
			
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

function dragdrop_transform1(box,text)
{	
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
			$('.input1').css({
				'border':'0px solid red',
				'background-color':'transparent',
			});

			$(this).css({
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
				
				var transformDropBox = $(event.target).css('transform');
				var topDropBox = parseInt($(event.target).css('top'));
				var leftDropBox = parseInt($(event.target).css('left'));
				$(ui.draggable).css({transform: transformDropBox});
				
				var line_height = ($(ui.draggable).text().length <= 20)? "30px" : "15px";
				
				$(this).animate({"top": topDropBox, "left": leftDropBox, "width": "129px", "line-height": line_height, "height": "30px"}, 200, "linear");
				var _this = this;
				setTimeout(function(){
					$(_this).css({"white-space": "unset", "text-align": "center"});
					console.log(_this);
				}, 200);
				
				console.log("top: ", topDropBox, ", left: ", leftDropBox);
			  }
			});
			
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


function dragdrop_temp(box,text)
{	
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
        $('.input1').css({
		'border':'0px solid red',
		'background-color':'transparent',
		'z-index':'1'
		});

            $(this)
                .css({
                    "border": "0px solid red",
                    "text-align": "center",
                    "z-index":"1"
                })
            $('#'+text).css('color','blue');
            $('#'+text).css('cursor','default');
            $('#'+text).css('z-index','1');
			var $this = $(this);
    ui.draggable.position({
      my: "center",
      at: "center",
      of: $this,
      using: function(pos) {
        $(this).animate(pos, 200, "linear");
      }
    });
			
        }
    });

$('#'+text).draggable({
        revert: 'invalid',
		start: function(event, ui) {
        $('.input1').css({
		'border':'1px solid gray','border-radius':'5px','z-index':'100'
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


function dragdrop1(box,text) {
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
            $(this)
                .css({
                    "border-bottom": "1px solid black",
                    "text-align": "center"
                })
            $('#'+text).css('color','blue');
			var $this = $(this);
    ui.draggable.position({
      my: "center",
      at: "center",
      of: $this,
      using: function(pos) {
        $(this).animate(pos, 200, "linear");
      }
    });
      }
    });

$('#'+text).draggable({
        revert: 'invalid',
		start: function(event, ui) {
        $('.input2').css({
		'border':'1px solid gray','border-radius':'5px'
		});
		},
        stop: function() {
        $('.input2').css({
		'border':'0px solid black',
		});
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
}


function dragdrop_opac(box,text,div) {
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
        $('.input1').css({
		'border':'0px solid red',
		'background-color':'transparent',
		});
		opacthis(div);
            $(this)
                .css({
                    "border": "0px solid red",
                    "text-align": "center"
                })
            $('#'+text).css('color','blue');
			var $this = $(this);
    ui.draggable.position({
      my: "center",
      at: "center",
      of: $this,
      using: function(pos) {
        $(this).animate(pos, 200, "linear");
      }
    });


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
		});
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
}

function dragdrop_opac1(box,text,div) {
    $('#'+box).droppable({
        accept: "#"+text,
        tolerance: 'touch',
        drop: function(event, ui) {
        $('.input2').css({
		'border':'0px solid red',
		'background-color':'transparent',
		});
		opacthis(div);
            $(this)
                .css({
                    "border": "0px solid red",
                    "text-align": "center"
                })
            $('#'+text).css('color','blue');
			var $this = $(this);
    ui.draggable.position({
      my: "center",
      at: "center",
      of: $this,
      using: function(pos) {
        $(this).animate(pos, 200, "linear");
      }
    });
        }
    });

$('#'+text).draggable({
        revert: 'invalid',
		start: function(event, ui) {
        $('.input2').css({
		'border':'1px solid gray','border-radius':'5px'
		});
		},
        stop: function() {
        $('.input2').css({
		'border':'0px solid red',
		});
            $(this).draggable('option', 'revert', 'invalid');
        }
    });
}

function for_popup02(pops, pbutton, audio, video)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
$('#'+pops).bPopup({
zIndex:2,
modalClose: false,
onClose: function() { 
aid.pause();
aid.currentTime=0;
$('#'+pbutton).find('.play').removeClass('dnone');
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
},
});
}


function for_slide1(audio,video) {
	var slide1_v = document.getElementById("video01");
	var slide1_a = document.getElementById("audio01");
	slide1_v.src = "video/page41/41_a.jpg";
	slide1_a.src = "audio/page41/slide1.ogg";
	$('#pbutton1').addClass('slide1a');
 	$('#slide1').css('background-color','black');
	$('.p1').css('display','block');
	$('.p2,.p3,.p4,.p5,.p6').css('display','none');
	$('.pause').addClass('dnone');
	$('.play').removeClass('dnone');
	$('.click_to_play').html('Click to Play');
	$('#slide2,#slide3,#slide4,#slide5,#slide6').css('background-color','gray');
}

function for_slide2(audio,video)
{
	var slide1_v = document.getElementById("video01");
	var slide1_a = document.getElementById("audio01");
	slide1_v.src = "video/page41/41_b.jpg";
	slide1_a.src = "audio/page41/slide2.ogg";
	$('#pbutton1').addClass('slide2a');
 	$('#slide2').css('background-color','black');
	$('.p2').css('display','block');
	$('.p1,.p3,.p4,.p5,.p6').css('display','none');
	$('.pause').addClass('dnone');
	$('.play').removeClass('dnone');
	$('.click_to_play').html('Click to Play');
	$('#slide1,#slide3,#slide4,#slide5,#slide6').css('background-color','gray');
}
function for_slide3(audio,video)
{
	var slide1_v = document.getElementById("video01");
	var slide1_a = document.getElementById("audio01");
	slide1_v.src = "video/page41/41_c.jpg";
	slide1_a.src = "audio/page41/slide3.ogg";
	$('#pbutton1').addClass('slide3a');
 	$('#slide3').css('background-color','black');
	$('.p3').css('display','block');
	$('.p1,.p2,.p4,.p5,.p6').css('display','none');
	$('.pause').addClass('dnone');
	$('.play').removeClass('dnone');
	$('.click_to_play').html('Click to Play');
	$('#slide1,#slide2,#slide4,#slide5,#slide6').css('background-color','gray');
}

function for_slide4(audio,video)
{
	var slide1_v = document.getElementById("video01");
	var slide1_a = document.getElementById("audio01");
	slide1_v.src = "video/page41/41_d.jpg";
	slide1_a.src = "audio/page41/slide4.ogg";
	$('#pbutton1').addClass('slide3a');
 	$('#slide4').css('background-color','black');
	$('.p4').css('display','block');
	$('.p1,.p2,.p3,.p5,.p6').css('display','none');
	$('.pause').addClass('dnone');
	$('.play').removeClass('dnone');
	$('.click_to_play').html('Click to Play');
	$('#slide1,#slide2,#slide3,#slide5,#slide6').css('background-color','gray');
}

function for_slide5(audio,video)
{
	var slide1_v = document.getElementById("video01");
	var slide1_a = document.getElementById("audio01");
	slide1_v.src = "video/page41/41_e.jpg";
	slide1_a.src = "audio/page41/slide5.ogg";
	$('#pbutton1').addClass('slide3a');
 	$('#slide5').css('background-color','black');
	$('.p5').css('display','block');
	$('.p1,.p2,.p3,.p4,.p6').css('display','none');
	$('.pause').addClass('dnone');
	$('.play').removeClass('dnone');
	$('.click_to_play').html('Click to Play');
	$('#slide1,#slide2,#slide3,#slide4,#slide6').css('background-color','gray');
}

function for_slide6(audio,video)
{
	var slide1_v = document.getElementById("video01");
	var slide1_a = document.getElementById("audio01");
	slide1_v.src = "video/page41/41_f.jpg";
	slide1_a.src = "audio/page41/slide6.ogg";
	$('#pbutton1').addClass('slide3a');
 	$('#slide6').css('background-color','black');
	$('.p6').css('display','block');
	$('.p1,.p2,.p3,.p5,.p4').css('display','none');
	$('.pause').addClass('dnone');
	$('.play').removeClass('dnone');
	$('.click_to_play').html('Click to Play');
	$('#slide1,#slide2,#slide3,#slide5,#slide4').css('background-color','gray');
}






function for_pbutton02(pbutton,audio)
{
// alert(audio);	
var aid = document.getElementById(audio);
if(aid.paused) 
{
aid.play();
$('#'+pbutton).find('.play').addClass('dnone'); 
$('#'+pbutton).find('.pause').removeClass('dnone');
$('.click_to_play').html('Click to Pause');
}
else	
{
aid.pause();
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}
}

function for_fullfsv(audio,video,pbutton)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
$('#'+video).on('play',function(e){
vid.play();
$('#'+pbutton).find('.play').addClass('dnone'); 
$('#'+pbutton).find('.pause').removeClass('dnone');
$('.click_to_play').html('Click to Pause');
});
$('#'+video).on('pause',function(e){
vid.pause();
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
});
}

function for_pbuttonv(pbutton,audio,video)
{
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
$('#'+pbutton).bind('touchstart click',function(e){
e.preventDefault();
if(vid.paused == true)
{
vid.play();
$(this).find('.pause').removeClass('dnone');
$(this).find('.play').addClass('dnone');
$('.click_to_play').html('Click to Pause');
}
else	
{
vid.pause();
$(this).find('.play').removeClass('dnone');
$(this).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}
});
}

function for_popup_video(pops, pbutton, video)
{
var vid = document.getElementById(video);
$('#'+pops).bPopup({
zIndex:2,
modalClose: false,
onClose: function() { 
vid.pause();	
vid.currentTime=0;
$('#'+pbutton).find('.play').removeClass('dnone');
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
},
});
}


function for_pbutton_video(pbutton,video)
{
var vid = document.getElementById(video);
if(vid.paused == true)
{
vid.play();
$('#'+pbutton).find('.play').addClass('dnone'); 
$('#'+pbutton).find('.pause').removeClass('dnone');
$('.click_to_play').html('Click to Pause');
}
else	
{
vid.pause();
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}
}
function for_videooff_video(video,pbutton)
{
var vid = document.getElementById(video);	
vid.pause();
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}
function for_videoon_video(video,pbutton)
{
var vid = document.getElementById(video);	
vid.play();
$('#'+pbutton).find('.play').addClass('dnone'); 
$('#'+pbutton).find('.pause').removeClass('dnone');
$('.click_to_play').html('Click to Play');
}


function for_videoon_long(audio,video,pbutton) {
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
var currT = vid.currentTime;
aid.currentTime=currT;
aid.play();
vid.play();
$('#'+pbutton).find('.play').addClass('dnone'); 
$('#'+pbutton).find('.pause').removeClass('dnone');
$('.click_to_play').html('Click to Pause');
}

function for_videooff_long(audio,video,pbutton) {
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
var currT = vid.currentTime;
aid.currentTime=currT;
aid.pause();
vid.pause();
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}

function for_pbutton_long(pbutton,audio,video) {
var aid = document.getElementById(audio);
var vid = document.getElementById(video);
var currT = vid.currentTime;
if(aid.paused) {
aid.currentTime=currT;
aid.play();
vid.play();
$('#'+pbutton).find('.play').addClass('dnone'); 
$('#'+pbutton).find('.pause').removeClass('dnone');
$('.click_to_play').html('Click to Pause');
}
else {
aid.currentTime=currT;
aid.pause();
vid.pause();
$('#'+pbutton).find('.play').removeClass('dnone'); 
$('#'+pbutton).find('.pause').addClass('dnone');
$('.click_to_play').html('Click to Play');
}
}

