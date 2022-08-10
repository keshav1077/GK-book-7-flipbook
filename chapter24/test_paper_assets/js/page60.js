$(window).load(function() {
	$('#opt1 .tickbox,#opt2 .tickbox,#opt3 .tickbox,#opt4 .tickbox,#opt5 .tickbox,#opt6 .tickbox,#opt7 .tickbox').on('click',tick);
});
$(function(){

$('.position_61').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#submit01').bind('touchstart click',function(e){
	$(this).css('opacity','0.5');
		$('.p60').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
		$('.page60_btn3').css('display','block');
});

var i = 0;
$('#submit02').bind('touchstart click',function(e){
if($('#set60_con1').text().trim() == 'Robinson Crusoe'){$('#set60_con1').css('color','blue');i = i + 2;} else{$('#set60_con1').css('color','red');}		
if($('#set60_con2').text().trim() == 'Aunt Polly'){$('#set60_con2').css('color','blue');i = i + 2;} else{$('#set60_con2').css('color','red');}
if($('#set60_con3').text().trim() == 'The Jungle Book'){$('#set60_con3').css('color','blue');i = i + 2;} else{$('#set60_con3').css('color','red');}
if($('#set60_con4').text().trim() == 'Lilliput'){$('#set60_con4').css('color','blue');i = i + 2;} else{$('#set60_con4').css('color','red');}
if($('#set60_con5').text().trim() == 'Dr Watson'){$('#set60_con5').css('color','blue');i = i + 2;} else{$('#set60_con5').css('color','red');}
if($('#set60_con6').text().trim() == 'Frodo Baggins'){$('#set60_con6').css('color','blue');i = i + 2;} else{$('#set60_con6').css('color','red');}
if($('#set60_con7').text().trim() == 'Narnia'){$('#set60_con7').css('color','blue');i = i + 2;} else{$('#set60_con7').css('color','red');}
if($('#set60_con8').text().trim() == 'Charlie and the Chocolate Factory' | $('#set60_con8').text().trim() == 'pangolin'){$('#set60_con8').css('color','blue');i = i + 2;} else{$('#set60_con8').css('color','red');}

if(($('#set60_con1').text().trim() == 'Robinson Crusoe') && ($('#set60_con2').text().trim() == 'Aunt Polly') && ($('#set60_con3').text().trim() == 'The Jungle Book') && ($('#set60_con4').text().trim() == 'Lilliput') && ($('#set60_con5').text().trim() == 'Dr Watson') && ($('#set60_con6').text().trim() == 'Frodo Baggins') && ($('#set60_con7').text().trim() == 'Narnia') && ($('#set60_con8').text().trim() == 'Charlie and the Chocolate Factory'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p60').attr('contenteditable', false); 
			$('.p60').css('color', 'blue'); 
			$('#submit02').off('click');
		}
		else
		{
			$('#submit02').on('click');
			$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
		}
/*
		$('#score').text(i);
		for_popup_score('pops1');

		$('#btnYes').bind('touchstart click',function(e){
				$('.p60').each(function(index, val) {
				 $(this).text('');
				 $('.p60').attr('contenteditable', true);
			 });
		});	
		$('#btnNo').bind('touchstart click',function(e){
				 $('.p60').attr('contenteditable', false);
		});
		i = 0;
*/
	});


$('#submit03').bind('touchstart click',function(e){
	$(this).css('opacity','0.5');
	//$('.t1').removeClass('tickbox').addClass('tickbox_right');
	$('.t1').addClass('tickbox_right');
	$('.tickbox').removeClass('tickbox_wrong');
	$('.tickbox').removeClass('tickbox_black');

	$('.p61_1,.p61_2,.p61_3,.p61_4,.p61_5,.p61_6,.p61_7,.p61_8').each(function(index, val) {
		$(this).off('click');
		 });

});

$('#submit04').click(function(){
	for(var i=1; i<=8; i++)
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
				$('#submit04').attr('disabled','disabled');	
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


});
function tick() {
	$(this).toggleClass('coloured');
	$(this).toggleClass('tickbox_black');
	$(this).parent().prevAll().find('.tickbox').removeClass('tickbox_black');
	$(this).parent().nextAll().find('.tickbox').removeClass('tickbox_black');
	$(this).parent().prevAll().find('.tickbox').removeClass('tickbox_wrong');
	$(this).parent().nextAll().find('.tickbox').removeClass('tickbox_wrong');
	}