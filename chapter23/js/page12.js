$(function(){
$('#_idContainer591').bind('touchstart click',function(e){
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

$('#_idContainer601').bind('touchstart click',function(e){
video_audio('pops8','video8','audio');
});
$('#video8').on('play',function(e){
	videoon('audio','video8');
});
$('#video8').on('pause',function(e){
	videooff('audio','video8');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video8');
});


$('#_idContainer561').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer622').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer703').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer581').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer571').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer611').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

// $('#_idContainer642').bind('touchstart click',function(e){
// for_popup1_v('pops9','pbutton9','video9');
// });

$('#_idContainer632').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});
$('#_idContainer685').bind('touchstart click',function(e){
for_popup1_v('pops11','pbutton11','video11');
});
$('#_idContainer688').bind('touchstart click',function(e){
for_popup1_v('pops12','pbutton12','video12');
});

$('#submit01').click(function(){
		$('.p12').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
});

$('#submit02').click(function(){
if($('#set12_con1').text().trim() == 'T' | $('#set12_con1').text().trim() == 't' | $('#set12_con1').text().trim() == 'TRUE' | $('#set12_con1').text().trim() == 'True' | $('#set12_con1').text().trim() == 'true'){$('#set12_con1').css('color','blue');} else{$('#set12_con1').css('color','red');}		
if($('#set12_con2').text().trim() == 'F' | $('#set12_con2').text().trim() == 'f' | $('#set12_con2').text().trim() == 'FALSE' | $('#set12_con2').text().trim() == 'False' | $('#set12_con2').text().trim() == 'false'){$('#set12_con2').css('color','blue');} else{$('#set12_con2').css('color','red');}
if($('#set12_con3').text().trim() == 'T' | $('#set12_con3').text().trim() == 't' | $('#set12_con3').text().trim() == 'TRUE' | $('#set12_con3').text().trim() == 'True' | $('#set12_con3').text().trim() == 'true'){$('#set12_con3').css('color','blue');} else{$('#set12_con3').css('color','red');}
if($('#set12_con4').text().trim() == 'F' | $('#set12_con4').text().trim() == 'f' | $('#set12_con4').text().trim() == 'FLASE' | $('#set12_con4').text().trim() == 'False' | $('#set12_con4').text().trim() == 'false'){$('#set12_con4').css('color','blue');} else{$('#set12_con4').css('color','red');}
if($('#set12_con5').text().trim() == 'T' | $('#set12_con5').text().trim() == 't' | $('#set12_con5').text().trim() == 'TRUE' | $('#set12_con5').text().trim() == 'True' | $('#set12_con5').text().trim() == 'true'){$('#set12_con5').css('color','blue');} else{$('#set12_con5').css('color','red');}
if($('#set12_con6').text().trim() == 'F' | $('#set12_con6').text().trim() == 'f' | $('#set12_con6').text().trim() == 'FALSE' | $('#set12_con6').text().trim() == 'False' | $('#set12_con6').text().trim() == 'false'){$('#set12_con6').css('color','blue');} else{$('#set12_con6').css('color','red');}
if($('#set12_con7').text().trim() == 'T' | $('#set12_con7').text().trim() == 't' | $('#set12_con7').text().trim() == 'TRUE' | $('#set12_con7').text().trim() == 'True' | $('#set12_con7').text().trim() == 'true'){$('#set12_con7').css('color','blue');} else{$('#set12_con7').css('color','red');}
if($('#set12_con8').text().trim() == 'F' | $('#set12_con8').text().trim() == 'f' | $('#set12_con8').text().trim() == 'FALSE' | $('#set12_con8').text().trim() == 'False' | $('#set12_con8').text().trim() == 'false'){$('#set12_con8').css('color','blue');} else{$('#set12_con8').css('color','red');}
if($('#set12_con9').text().trim() == 'F' | $('#set12_con9').text().trim() == 'f' | $('#set12_con9').text().trim() == 'FALSE' | $('#set12_con9').text().trim() == 'False' | $('#set12_con9').text().trim() == 'false'){$('#set12_con9').css('color','blue');} else{$('#set12_con9').css('color','red');}
if($('#set12_con10').text().trim() == 'F' | $('#set12_con10').text().trim() == 'f' | $('#set12_con10').text().trim() == 'FALSE' | $('#set12_con10').text().trim() == 'False' | $('#set12_con10').text().trim() == 'false'){$('#set12_con10').css('color','blue');} else{$('#set12_con10').css('color','red');}

if(($('#set12_con1').text().trim() == 'T' | $('#set12_con1').text().trim() == 't' | $('#set12_con1').text().trim() == 'TRUE' | $('#set12_con1').text().trim() == 'True' | $('#set12_con1').text().trim() == 'true') && ($('#set12_con2').text().trim() == 'F' | $('#set12_con2').text().trim() == 'f' | $('#set12_con2').text().trim() == 'FALSE' | $('#set12_con2').text().trim() == 'False' | $('#set12_con2').text().trim() == 'false') && ($('#set12_con3').text().trim() == 'T' | $('#set12_con3').text().trim() == 't' | $('#set12_con3').text().trim() == 'TRUE' | $('#set12_con3').text().trim() == 'True' | $('#set12_con3').text().trim() == 'true') && ($('#set12_con4').text().trim() == 'F' | $('#set12_con4').text().trim() == 'f' | $('#set12_con4').text().trim() == 'FALSE' | $('#set12_con4').text().trim() == 'False' | $('#set12_con4').text().trim() == 'false') && ($('#set12_con5').text().trim() == 'T' | $('#set12_con5').text().trim() == 't' | $('#set12_con5').text().trim() == 'TRUE' | $('#set12_con5').text().trim() == 'True' | $('#set12_con5').text().trim() == 'true') && ($('#set12_con6').text().trim() == 'F' | $('#set12_con6').text().trim() == 'f' | $('#set12_con6').text().trim() == 'FALSE' | $('#set12_con6').text().trim() == 'False' | $('#set12_con6').text().trim() == 'false') && ($('#set12_con7').text().trim() == 'T' | $('#set12_con7').text().trim() == 't' | $('#set12_con7').text().trim() == 'TRUE' | $('#set12_con7').text().trim() == 'True' | $('#set12_con7').text().trim() == 'true') && ($('#set12_con8').text().trim() == 'F' | $('#set12_con8').text().trim() == 'f' | $('#set12_con8').text().trim() == 'FALSE' | $('#set12_con8').text().trim() == 'False' | $('#set12_con8').text().trim() == 'false') && ($('#set12_con9').text().trim() == 'F' | $('#set12_con9').text().trim() == 'f' | $('#set12_con9').text().trim() == 'FALSE' | $('#set12_con9').text().trim() == 'False' | $('#set12_con9').text().trim() == 'false') && ($('#set12_con10').text().trim() == 'F' | $('#set12_con10').text().trim() == 'f' | $('#set12_con10').text().trim() == 'FALSE' | $('#set12_con10').text().trim() == 'False' | $('#set12_con10').text().trim() == 'false'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p12').attr('contenteditable', false); 
			$('.p12').css('color', 'blue'); 
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
	$('.p16_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$('.p16_input_text2').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text('');
});


});
