$(function(){

dragdrop('box1','text3');
dragdrop('box2','text2');
dragdrop('box3','text4');
dragdrop('box4','text1');
dragdrop('box5','text5');


$('#_idContainer2672').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer2677').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer2674').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer2680').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer2676').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});


$('#_idContainer2771').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer2775').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer2777').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});

$('#_idContainer2774').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});

$('#_idContainer2772').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});

$('#_idContainer2776').bind('touchstart click',function(e){
for_popup1_v('pops11','pbutton11','video11');
});

$('#_idContainer2778').bind('touchstart click',function(e){
for_popup1_v('pops12','pbutton12','video12');
});
$('#_idContainer2773').bind('touchstart click',function(e){
for_popup1_v('pops13','pbutton13','video13');
});

$('#submit01').bind('touchstart click',function(e){
	$('.p32_input_text1').css({
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
	$(this).css('opacity','0.5');
		$('.p20').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});

$('#submit03').click(function(){
if($('#set45_con1').text().trim() == 'F' | $('#set45_con1').text().trim() == 'f'){$('#set45_con1').css('color','blue');} else{$('#set45_con1').css('color','red');}
if($('#set45_con2').text().trim() == 'D' | $('#set45_con2').text().trim() == 'd'){$('#set45_con2').css('color','blue');} else{$('#set45_con2').css('color','red');}
if($('#set45_con3').text().trim() == 'A' | $('#set45_con3').text().trim() == 'a'){$('#set45_con3').css('color','blue');} else{$('#set45_con3').css('color','red');}
if($('#set45_con4').text().trim() == 'H' | $('#set45_con4').text().trim() == 'h'){$('#set45_con4').css('color','blue');} else{$('#set45_con4').css('color','red');}
if($('#set45_con5').text().trim() == 'B' | $('#set45_con5').text().trim() == 'b'){$('#set45_con5').css('color','blue');} else{$('#set45_con5').css('color','red');}
if($('#set45_con6').text().trim() == 'G' | $('#set45_con6').text().trim() == 'g'){$('#set45_con6').css('color','blue');} else{$('#set45_con6').css('color','red');}
if($('#set45_con7').text().trim() == 'C' | $('#set45_con7').text().trim() == 'c'){$('#set45_con7').css('color','blue');} else{$('#set45_con7').css('color','red');}
if($('#set45_con8').text().trim() == 'E' | $('#set45_con8').text().trim() == 'e'){$('#set45_con8').css('color','blue');} else{$('#set45_con8').css('color','red');}

if(($('#set45_con1').text().trim() == 'F' | $('#set45_con1').text().trim() == 'f') && ($('#set45_con2').text().trim() == 'D' | $('#set45_con2').text().trim() == 'd') && ($('#set45_con3').text().trim() == 'A' | $('#set45_con3').text().trim() == 'a') && ($('#set45_con4').text().trim() == 'H' | $('#set45_con4').text().trim() == 'h') && ($('#set45_con5').text().trim() == 'B' | $('#set45_con5').text().trim() == 'b') && ($('#set45_con6').text().trim() == 'G' | $('#set45_con6').text().trim() == 'g') && ($('#set45_con7').text().trim() == 'C' | $('#set45_con7').text().trim() == 'c') && ($('#set45_con8').text().trim() == 'E' | $('#set45_con8').text().trim() == 'e'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p20').attr('contenteditable', false); 
			$('.p20').css('color', 'blue'); 
			$('#submit03').off('click');
		}
		else
		{
			$('#submit03').on('click');
			$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
		}
	});

});
