$(window).load(function() {
	$('#opt1 .tickbox,#opt2 .tickbox,#opt3 .tickbox,#opt4 .tickbox,#opt5 .tickbox,#opt6 .tickbox,#opt7 .tickbox,#opt8 .tickbox,#opt9 .tickbox,#opt10 .tickbox,#opt11 .tickbox,#opt12 .tickbox').on('click',tick);
});

$(function(){

$('#submit01').bind('touchstart click',function(e){
	//$('.t1').removeClass('tickbox').addClass('tickbox_right');
	$('.t1').addClass('tickbox_right');
	$('.tickbox').removeClass('tickbox_wrong');
	$('.tickbox').removeClass('tickbox_black');

	$('.p09_1,.p09_2,.p09_3,.p09_4,.p09_5,.p09_6,.p09_7,.p09_8,.p09_9,.p09_10,.p09_11,.p09_12').each(function(index, val) {
		$(this).off('click');
		 });

});

$('#submit02').click(function(){
	for(var i=1; i<=12; i++)
	{
	if($('#opt'+i).find('.tickbox.t1.coloured.tickbox_black').length == 1)
	{
			
			$('#opt'+i+' .tickbox.t1').addClass('tickbox_right');
			$('#opt'+i).off('click');
	}
	else if($('#opt'+i).find('.tickbox.w1.coloured.tickbox_black').length == 1)
	{
			$('#opt'+i+' .tickbox.w1').addClass('tickbox_wrong');
	}
	else if($('#opt'+i).find('.tickbox.w2.coloured.tickbox_black').length == 1)
	{
			$('#opt'+i+' .tickbox.w2').addClass('tickbox_wrong');
	}
	else if($('#opt'+i).find('.tickbox.w3.coloured.tickbox_black').length == 1)
	{
			$('#opt'+i+' .tickbox.w3').addClass('tickbox_wrong');
	}

}

	if($('#opt1').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt2').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt3').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt4').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt5').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt6').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt7').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt8').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt9').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt10').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt11').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt12').find('.tickbox.t1.coloured.tickbox_black').length == 1)	{
	
				$(this).addClass('showanspg11_2answered');	
				$('#submit02').attr('disabled','disabled');	
				$('.tickbox').off('click');
}
else
{
				$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
            
}

});

$('#_idContainer232').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer233').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('.position_10').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer300').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer301').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer245').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});



});


function tick() {
	$(this).toggleClass('coloured');
	$(this).toggleClass('tickbox_black');
	$(this).parent().prevAll().find('.tickbox').removeClass('tickbox_black');
	$(this).parent().nextAll().find('.tickbox').removeClass('tickbox_black');
	$(this).parent().prevAll().find('.tickbox').removeClass('tickbox_wrong');
	$(this).parent().nextAll().find('.tickbox').removeClass('tickbox_wrong');
	}