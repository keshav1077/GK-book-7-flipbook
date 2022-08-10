$(function(){
$('#_idContainer757').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer760').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer766').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer769').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer782').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});
$('#_idContainer797').bind('touchstart click',function(e){
for_popup1_v('pops11','pbutton11','video11');
});
$('#_idContainer789').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer792').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer795').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});
$('#_idContainer790').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});

$('#_idContainer785').bind('touchstart click',function(e){
for_popup1_v('pops12','pbutton12','video12');
});
$('#_idContainer800').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

	dragdrop('box1','text6');
	dragdrop('box2','text1');
	dragdrop('box3','text2');
	dragdrop('box4','text5');
	dragdrop('box5','text4');
	dragdrop('box6','text7');
	dragdrop('box7','text3');

$('#submit01').click(function(){
		$(this).css('opacity','0.5');
		$('.p13').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

		$('.p13_1').each(function(index, val) {
		 $(this).html("Indian roller<br/> (Neelkanth)");
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

		$('.p13_2').each(function(index, val) {
		 $(this).html("Asian nightingale<br/> (Koel)");
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
		
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
