$(window).load(function() {
	$('#opt1 .tickbox,#opt2 .tickbox,#opt3 .tickbox,#opt4 .tickbox,#opt5 .tickbox,#opt6 .tickbox,#opt7 .tickbox').on('click',tick);
});

$(function(){

$('#submit01').bind('touchstart click',function(e){
	//$('.t1').removeClass('tickbox').addClass('tickbox_right');
	$('.t1').addClass('tickbox_right');
	$('.tickbox').removeClass('tickbox_wrong');
	$('.tickbox').removeClass('tickbox_black');

	$('.p15_1,.p15_2,.p15_3,.p15_4,.p15_5,.p15_6,.p15_7').each(function(index, val) {
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

	if($('#opt1').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt2').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt3').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt4').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt5').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt6').find('.tickbox.t1.coloured.tickbox_black').length == 1 && $('#opt7').find('.tickbox.t1.coloured.tickbox_black').length == 1)	{
	
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

$('.position_14').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('.position_15').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#submit03').bind('touchstart click',function(e){
	$(this).css('opacity','0.5');
		$('.p15').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
});
$('#submit04').bind('touchstart click',function(e){

if($('#page15_con1').text().trim() == 'China' | $('#page15_con1').text().trim() == 'CHINA' | $('#page15_con1').text().trim() == 'china'){$('#page15_con1').css('color','blue');} else{$('#page15_con1').css('color','red');}		
if($('#page15_con1').text().trim() == 'China' | $('#page15_con1').text().trim() == 'CHINA' | $('#page15_con1').text().trim() == 'china')
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p15').attr('contenteditable', false); 
			$('.p15').css('color', 'blue'); 
			$('#submit04').off('click');
		}
		else
		{
			$('#submit04').on('click');
			$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
		}
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
