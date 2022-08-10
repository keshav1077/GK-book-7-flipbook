$(function(){
$('#_idContainer1630').bind('touchstart click',function(e){
video_audio('pops1','video1','audio');
});
$('#video1').on('play',function(e){
	videoon('audio','video1');
});
$('#video1').on('pause',function(e){
	videooff('audio','video1');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video1');
});
$('#_idContainer1659').bind('touchstart click',function(e){
video_audio('pops5','video5','audio');
});
$('#video5').on('play',function(e){
	videoon('audio','video5');
});
$('#video5').on('pause',function(e){
	videooff('audio','video5');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video5');
});


$('#_idContainer1647').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer1653').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer1635').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});


$('#_idContainer1640').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer1677').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});


$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p19').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
});

$('#submit02').click(function(){
if($('#set19_con1').text().trim() == 'T' | $('#set19_con1').text().trim() == 't' | $('#set19_con1').text().trim() == 'TRUE' | $('#set19_con1').text().trim() == 'True' | $('#set19_con1').text().trim() == 'true'){$('#set19_con1').css('color','blue');} else{$('#set19_con1').css('color','red');}		
if($('#set19_con2').text().trim() == 'F' | $('#set19_con2').text().trim() == 'f' | $('#set19_con2').text().trim() == 'FALSE' | $('#set19_con2').text().trim() == 'False' | $('#set19_con2').text().trim() == 'false'){$('#set19_con2').css('color','blue');} else{$('#set19_con2').css('color','red');}
if($('#set19_con3').text().trim() == 'F' | $('#set19_con3').text().trim() == 'f' | $('#set19_con3').text().trim() == 'FALSE' | $('#set19_con3').text().trim() == 'False' | $('#set19_con3').text().trim() == 'false'){$('#set19_con3').css('color','blue');} else{$('#set19_con3').css('color','red');}
if($('#set19_con4').text().trim() == 'T' | $('#set19_con4').text().trim() == 't' | $('#set19_con4').text().trim() == 'TRUE' | $('#set19_con4').text().trim() == 'True' | $('#set19_con4').text().trim() == 'true'){$('#set19_con4').css('color','blue');} else{$('#set19_con4').css('color','red');}
if($('#set19_con5').text().trim() == 'T' | $('#set19_con5').text().trim() == 't' | $('#set19_con5').text().trim() == 'TRUE' | $('#set19_con5').text().trim() == 'True' | $('#set19_con5').text().trim() == 'true'){$('#set19_con5').css('color','blue');} else{$('#set19_con5').css('color','red');}
if($('#set19_con6').text().trim() == 'F' | $('#set19_con6').text().trim() == 'f' | $('#set19_con6').text().trim() == 'FALSE' | $('#set19_con6').text().trim() == 'False' | $('#set19_con6').text().trim() == 'false'){$('#set19_con6').css('color','blue');} else{$('#set19_con6').css('color','red');}
if($('#set19_con7').text().trim() == 'F' | $('#set19_con7').text().trim() == 'f' | $('#set19_con7').text().trim() == 'FALSE' | $('#set19_con7').text().trim() == 'False' | $('#set19_con7').text().trim() == 'false'){$('#set19_con7').css('color','blue');} else{$('#set19_con7').css('color','red');}
if($('#set19_con8').text().trim() == 'T' | $('#set19_con8').text().trim() == 't' | $('#set19_con8').text().trim() == 'TRUE' | $('#set19_con8').text().trim() == 'True' | $('#set19_con8').text().trim() == 'true'){$('#set19_con8').css('color','blue');} else{$('#set19_con8').css('color','red');}
if($('#set19_con9').text().trim() == 'T' | $('#set19_con9').text().trim() == 't' | $('#set19_con9').text().trim() == 'TRUE' | $('#set19_con9').text().trim() == 'True' | $('#set19_con9').text().trim() == 'true'){$('#set19_con9').css('color','blue');} else{$('#set19_con9').css('color','red');}
if($('#set19_con10').text().trim() == 'T' | $('#set19_con10').text().trim() == 't' | $('#set19_con10').text().trim() == 'TRUE' | $('#set19_con10').text().trim() == 'True' | $('#set19_con10').text().trim() == 'true'){$('#set19_con10').css('color','blue');} else{$('#set19_con10').css('color','red');}

if(($('#set19_con1').text().trim() == 'T' | $('#set19_con1').text().trim() == 't' | $('#set19_con1').text().trim() == 'TRUE' | $('#set19_con1').text().trim() == 'True' | $('#set19_con1').text().trim() == 'true') && ($('#set19_con2').text().trim() == 'F' | $('#set19_con2').text().trim() == 'f' | $('#set19_con2').text().trim() == 'FALSE' | $('#set19_con2').text().trim() == 'False' | $('#set19_con2').text().trim() == 'false') && ($('#set19_con3').text().trim() == 'F' | $('#set19_con3').text().trim() == 'f' | $('#set19_con3').text().trim() == 'FALSE' | $('#set19_con3').text().trim() == 'False' | $('#set19_con3').text().trim() == 'false') && ($('#set19_con4').text().trim() == 'T' | $('#set19_con4').text().trim() == 't' | $('#set19_con4').text().trim() == 'TRUE' | $('#set19_con4').text().trim() == 'True' | $('#set19_con4').text().trim() == 'true') && ($('#set19_con5').text().trim() == 'T' | $('#set19_con5').text().trim() == 't' | $('#set19_con5').text().trim() == 'TRUE' | $('#set19_con5').text().trim() == 'True' | $('#set19_con5').text().trim() == 'true') && ($('#set19_con6').text().trim() == 'F' | $('#set19_con6').text().trim() == 'f' | $('#set19_con6').text().trim() == 'FALSE' | $('#set19_con6').text().trim() == 'False' | $('#set19_con6').text().trim() == 'false') && ($('#set19_con7').text().trim() == 'F' | $('#set19_con7').text().trim() == 'f' | $('#set19_con7').text().trim() == 'FALSE' | $('#set19_con7').text().trim() == 'False' | $('#set19_con7').text().trim() == 'false') && ($('#set19_con8').text().trim() == 'T' | $('#set19_con8').text().trim() == 't' | $('#set19_con8').text().trim() == 'TRUE' | $('#set19_con8').text().trim() == 'True' | $('#set19_con8').text().trim() == 'true') && ($('#set19_con9').text().trim() == 'T' | $('#set19_con9').text().trim() == 't' | $('#set19_con9').text().trim() == 'TRUE' | $('#set19_con9').text().trim() == 'True' | $('#set19_con9').text().trim() == 'true') && ($('#set19_con10').text().trim() == 'T' | $('#set19_con10').text().trim() == 't' | $('#set19_con10').text().trim() == 'TRUE' | $('#set19_con10').text().trim() == 'True' | $('#set19_con10').text().trim() == 'true'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p19').attr('contenteditable', false); 
			$('.p19').css('color', 'blue'); 
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


});
