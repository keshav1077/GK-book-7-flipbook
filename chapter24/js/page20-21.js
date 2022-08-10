$(function(){

$('#_idContainer817').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('#_idContainer835').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer843').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('.position_1').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer875').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer887').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer893').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});
$('#_idContainer868').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});


	dragdrop('box1','text6');
	dragdrop('box2','text1');
	dragdrop('box3','text7');
	dragdrop('box4','text10');
	dragdrop('box5','text5');
	dragdrop('box6','text4');
	dragdrop('box7','text8');
	dragdrop('box8','text2');
	dragdrop('box9','text3');
	dragdrop('box10','text11');
	dragdrop('box11','text9');

$('#submit01').bind('touchstart click',function(e){
	$('.p20_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text("");
});

$('#submit02').click(function(){
if($('#set13_con1').text().trim() == 'Shimla'){$('#set13_con1').css('color','blue');} else{$('#set13_con1').css('color','red');}		
if($('#set13_con2').text().trim() == 'Black francolin'){$('#set13_con2').css('color','blue');} else{$('#set13_con2').css('color','red');}
if($('#set13_con3').text().trim() == 'Gujarat'){$('#set13_con3').css('color','blue');} else{$('#set13_con3').css('color','red');}
if($('#set13_con4').text().trim() == 'Indian roller (Neelkanth)'){$('#set13_con4').css('color','blue');} else{$('#set13_con4').css('color','red');}
if($('#set13_con5').text().trim() == 'Kerala'){$('#set13_con5').css('color','blue');} else{$('#set13_con5').css('color','red');}
if($('#set13_con6').text().trim() == 'Dispur'){$('#set13_con6').css('color','blue');} else{$('#set13_con6').css('color','red');}
if($('#set13_con7').text().trim() == 'Meghalaya'){$('#set13_con7').css('color','blue');} else{$('#set13_con7').css('color','red');}
if($('#set13_con8').text().trim() == 'Asian nightingale (Koel)'){$('#set13_con8').css('color','blue');} else{$('#set13_con8').css('color','red');}

if(($('#set13_con1').text().trim() == 'Shimla') && ($('#set13_con2').text().trim() == 'Black francolin') && ($('#set13_con3').text().trim() == 'Gujarat') && ($('#set13_con4').text().trim() == 'Indian roller (Neelkanth)') && ($('#set13_con5').text().trim() == 'Kerala') && ($('#set13_con6').text().trim() == 'Dispur') && ($('#set13_con7').text().trim() == 'Meghalaya') && ($('#set13_con8').text().trim() == 'Asian nightingale (Koel)'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p13').attr('contenteditable', false); 
			$('.p13').css('color', 'blue'); 
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
	});

$('#submit03').bind('touchstart click',function(e){
	$('.p18_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text("");
});

});
