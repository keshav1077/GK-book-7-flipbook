$(function(){
$('#_idContainer1788').bind('touchstart click',function(e){
video_audio('pops6','video6','audio');
});
$('#video6').on('play',function(e){
	videoon('audio','video6');
});
$('#video6').on('pause',function(e){
	videooff('audio','video6');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video6');
});
$('#_idContainer1777').bind('touchstart click',function(e){
video_audio('pops4','video4','audio');
});
$('#video4').on('play',function(e){
	videoon('audio','video4');
});
$('#video4').on('pause',function(e){
	videooff('audio','video4');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video4');
});

dragdrop('box1','text4');
dragdrop('box2','text2');
dragdrop('box3','text5');
dragdrop('box4','text1');
dragdrop('box5','text3');


$('#_idContainer1765').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer1817').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer1770').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer1782').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer1836').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});
$('#_idContainer1846').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});
$('#_idContainer1847').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});
$('#_idContainer1848').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});
$('#_idContainer1849').bind('touchstart click',function(e){
for_popup1_v('pops11','pbutton11','video11');
});
$('#_idContainer1850').bind('touchstart click',function(e){
for_popup1_v('pops12','pbutton12','video12');
});
$('#_idContainer1851').bind('touchstart click',function(e){
for_popup1_v('pops13','pbutton13','video13');
});
$('#_idContainer1852').bind('touchstart click',function(e){
for_popup1_v('pops14','pbutton14','video14');
});


$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p20').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});

$('#submit02').click(function(){
if($('#set20_con1').text().trim() == 'G' | $('#set20_con1').text().trim() == 'g'){$('#set20_con1').css('color','blue');} else{$('#set20_con1').css('color','red');}		
if($('#set20_con2').text().trim() == 'A' | $('#set20_con2').text().trim() == 'a'){$('#set20_con2').css('color','blue');} else{$('#set20_con2').css('color','red');}
if($('#set20_con3').text().trim() == 'D' | $('#set20_con3').text().trim() == 'd'){$('#set20_con3').css('color','blue');} else{$('#set20_con3').css('color','red');}
if($('#set20_con4').text().trim() == 'I' | $('#set20_con4').text().trim() == 'i'){$('#set20_con4').css('color','blue');} else{$('#set20_con4').css('color','red');}
if($('#set20_con5').text().trim() == 'B' | $('#set20_con5').text().trim() == 'b'){$('#set20_con5').css('color','blue');} else{$('#set20_con5').css('color','red');}
if($('#set20_con6').text().trim() == 'H' | $('#set20_con6').text().trim() == 'h'){$('#set20_con6').css('color','blue');} else{$('#set20_con6').css('color','red');}
if($('#set20_con7').text().trim() == 'F' | $('#set20_con7').text().trim() == 'f'){$('#set20_con7').css('color','blue');} else{$('#set20_con7').css('color','red');}
if($('#set20_con8').text().trim() == 'E' | $('#set20_con8').text().trim() == 'e'){$('#set20_con8').css('color','blue');} else{$('#set20_con8').css('color','red');}
if($('#set20_con9').text().trim() == 'C' | $('#set20_con9').text().trim() == 'c'){$('#set20_con9').css('color','blue');} else{$('#set20_con9').css('color','red');}

if(($('#set20_con1').text().trim() == 'G' | $('#set20_con1').text().trim() == 'g') && ($('#set20_con2').text().trim() == 'A' | $('#set20_con2').text().trim() == 'a') && ($('#set20_con3').text().trim() == 'D' | $('#set20_con3').text().trim() == 'd') && ($('#set20_con4').text().trim() == 'I' | $('#set20_con4').text().trim() == 'i') && ($('#set20_con5').text().trim() == 'B' | $('#set20_con5').text().trim() == 'b') && ($('#set20_con6').text().trim() == 'H' | $('#set20_con6').text().trim() == 'h') && ($('#set20_con7').text().trim() == 'F' | $('#set20_con7').text().trim() == 'f') && ($('#set20_con8').text().trim() == 'E' | $('#set20_con8').text().trim() == 'e') && ($('#set20_con9').text().trim() == 'C' | $('#set20_con9').text().trim() == 'c'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p20').attr('contenteditable', false); 
			$('.p20').css('color', 'blue'); 
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



});
