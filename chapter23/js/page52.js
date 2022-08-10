$(window).load(function() {
	$('#opt1 .tickboxm,#opt2 .tickboxm,#opt3 .tickboxm,#opt4 .tickboxm,#opt5 .tickboxm,#opt6 .tickboxm,#opt7 .tickboxm,#opt8 .tickboxm,#opt9 .tickboxm').on('click',tick);
});

$(function(){
$('.position_53').bind('touchstart click',function(e){
video_audio('pops2','video2','audio');
});
$('#video2').on('play',function(e){
	videoon('audio','video2');
});
$('#video2').on('pause',function(e){
	videooff('audio','video2');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video2');
});

$('#_idContainer3152').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('#_idContainer3148').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer3150').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer3154').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer3156').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer3158').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});


$('#submit02').bind('touchstart click',function(e){
	$(this).css('opacity','0.5');
	//$('.t1').removeClass('tickbox').addClass('tickbox_rightm');
	$('.t1').addClass('tickbox_rightm');
	$('.tickboxm').removeClass('tickbox_wrongm');
	$('.tickboxm').removeClass('tickbox_blackm');

	$('.p53_1,.p53_2,.p53_3,.p53_4,.p53_5,.p53_6,.p53_7,.p53_8,.p53_9').each(function(index, val) {
		$(this).off('click');
		 });

});

$('#submit03').click(function(){
	for(var i=1; i<=12; i++)
	{
	if($('#opt'+i).find('.tickboxm.t1.coloured.tickbox_blackm').length == 1)
	{
			
			$('#opt'+i+' .tickboxm.t1').addClass('tickbox_rightm');
			$('#opt'+i).off('click');
	}
	else if($('#opt'+i).find('.tickboxm.w1.coloured.tickbox_blackm').length == 1)
	{
			$('#opt'+i+' .tickboxm.w1').addClass('tickbox_wrongm');
	}
	else if($('#opt'+i).find('.tickboxm.w2.coloured.tickbox_blackm').length == 1)
	{
			$('#opt'+i+' .tickboxm.w2').addClass('tickbox_wrongm');
	}
	else if($('#opt'+i).find('.tickboxm.w3.coloured.tickbox_blackm').length == 1)
	{
			$('#opt'+i+' .tickboxm.w3').addClass('tickbox_wrongm');
	}

}

	if($('#opt1').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt2').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt3').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt4').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt5').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt6').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt7').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt8').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt9').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt10').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt11').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1 && $('#opt12').find('.tickboxm.t1.coloured.tickbox_blackm').length == 1)	{
	
				$(this).addClass('showanspg11_2answered');	
				$('#submit03').attr('disabled','disabled');	
				$('.tickboxm').off('click');
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


$('#submit1').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.match52').css('display','block');
		$('.incorrect').css('display','none');
		$('.Match1').off("click");
});


$('#submit04').click(function(){
	$(this).css('opacity','0.5');
		$('.p52').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});

$('#submit05').click(function(){
if($('#set52_con1').text().trim() == 'I' | $('#set52_con1').text().trim() == 'I'){$('#set52_con1').css('color','blue');} else{$('#set52_con1').css('color','red');}		
if($('#set52_con2').text().trim() == 'have' | $('#set52_con2').text().trim() == 'HAVE'){$('#set52_con2').css('color','blue');} else{$('#set52_con2').css('color','red');}
if($('#set52_con3').text().trim() == 'decoded' | $('#set52_con3').text().trim() == 'DECODED'){$('#set52_con3').css('color','blue');} else{$('#set52_con3').css('color','red');}
if($('#set52_con4').text().trim() == 'the' | $('#set52_con4').text().trim() == 'THE'){$('#set52_con4').css('color','blue');} else{$('#set52_con4').css('color','red');}
if($('#set52_con5').text().trim() == 'message' | $('#set52_con5').text().trim() == 'MESSAGE'){$('#set52_con5').css('color','blue');} else{$('#set52_con5').css('color','red');}
if($('#set52_con6').text().trim() == 'I' | $('#set52_con6').text().trim() == 'I'){$('#set52_con6').css('color','blue');} else{$('#set52_con6').css('color','red');}
if($('#set52_con7').text().trim() == 'love' | $('#set52_con7').text().trim() == 'LOVE'){$('#set52_con7').css('color','blue');} else{$('#set52_con7').css('color','red');}
if($('#set52_con8').text().trim() == 'to' | $('#set52_con8').text().trim() == 'TO'){$('#set52_con8').css('color','blue');} else{$('#set52_con8').css('color','red');}
if($('#set52_con9').text().trim() == 'go' | $('#set52_con9').text().trim() == 'GO'){$('#set52_con9').css('color','blue');} else{$('#set52_con9').css('color','red');}
if($('#set52_con10').text().trim() == 'to' | $('#set52_con10').text().trim() == 'TO'){$('#set52_con10').css('color','blue');} else{$('#set52_con10').css('color','red');}
if($('#set52_con11').text().trim() == 'school' | $('#set52_con11').text().trim() == 'SCHOOL'){$('#set52_con11').css('color','blue');} else{$('#set52_con11').css('color','red');}
if($('#set52_con12').text().trim() == 'to' | $('#set52_con12').text().trim() == 'TO'){$('#set52_con12').css('color','blue');} else{$('#set52_con12').css('color','red');}
if($('#set52_con13').text().trim() == 'study' | $('#set52_con13').text().trim() == 'STUDY'){$('#set52_con13').css('color','blue');} else{$('#set52_con13').css('color','red');}

if(($('#set52_con1').text().trim() == 'I' | $('#set52_con1').text().trim() == 'I') && ($('#set52_con2').text().trim() == 'have' | $('#set52_con2').text().trim() == 'HAVE') && ($('#set52_con3').text().trim() == 'decoded' | $('#set52_con3').text().trim() == 'DECODED') && ($('#set52_con4').text().trim() == 'the' | $('#set52_con4').text().trim() == 'THE') && ($('#set52_con5').text().trim() == 'message' | $('#set52_con5').text().trim() == 'MESSAGE') && ($('#set52_con6').text().trim() == 'I' | $('#set52_con6').text().trim() == 'I') && ($('#set52_con7').text().trim() == 'love' | $('#set52_con7').text().trim() == 'LOVE') && ($('#set52_con8').text().trim() == 'to' | $('#set52_con8').text().trim() == 'TO') && ($('#set52_con9').text().trim() == 'go' | $('#set52_con9').text().trim() == 'GO') && ($('#set52_con10').text().trim() == 'to' | $('#set52_con10').text().trim() == 'TO') && ($('#set52_con11').text().trim() == 'school' | $('#set52_con11').text().trim() == 'SCHOOL') && ($('#set52_con12').text().trim() == 'to' | $('#set52_con12').text().trim() == 'TO') && ($('#set52_con13').text().trim() == 'study' | $('#set52_con13').text().trim() == 'STUDY'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p52').attr('contenteditable', false); 
			$('.p52').css('color', 'blue'); 
			$('#submit05').off('click');
		}
		else
		{
			$('#submit05').on('click');
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
	$(this).toggleClass('tickbox_blackm');
	$(this).parent().prevAll().find('.tickboxm').removeClass('tickbox_blackm');
	$(this).parent().nextAll().find('.tickboxm').removeClass('tickbox_blackm');
	$(this).parent().prevAll().find('.tickboxm').removeClass('tickbox_wrongm');
	$(this).parent().nextAll().find('.tickboxm').removeClass('tickbox_wrongm');
	}