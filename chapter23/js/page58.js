$(function(){
$('#_idContainer012').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('#_idContainer032').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer036').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer040').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer020').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer057').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer068').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});
$('#_idContainer065').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});
$('#_idContainer076').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});


$('#submit01').click(function(){
	$(this).css('opacity','0.5');
		$('.p59').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

});

$('#submit02').click(function(){
if($('#set59_con1').text().trim() == '1'){$('#set59_con1').css('color','blue');} else{$('#set59_con1').css('color','red');}		
if($('#set59_con2').text().trim() == '2'){$('#set59_con2').css('color','blue');} else{$('#set59_con2').css('color','red');}
if($('#set59_con3').text().trim() == '3'){$('#set59_con3').css('color','blue');} else{$('#set59_con3').css('color','red');}
if($('#set59_con4').text().trim() == '4'){$('#set59_con4').css('color','blue');} else{$('#set59_con4').css('color','red');}
if($('#set59_con5').text().trim() == '5'){$('#set59_con5').css('color','blue');} else{$('#set59_con5').css('color','red');}
if($('#set59_con6').text().trim() == '6'){$('#set59_con6').css('color','blue');} else{$('#set59_con6').css('color','red');}
if($('#set59_con7').text().trim() == '7'){$('#set59_con7').css('color','blue');} else{$('#set59_con7').css('color','red');}
if($('#set59_con8').text().trim() == '8'){$('#set59_con8').css('color','blue');} else{$('#set59_con8').css('color','red');}
if($('#set59_con9').text().trim() == '9'){$('#set59_con9').css('color','blue');} else{$('#set59_con9').css('color','red');}
if($('#set59_con10').text().trim() == '10'){$('#set59_con9').css('color','blue');} else{$('#set59_con10').css('color','red');}
if($('#set59_con11').text().trim() == '11'){$('#set59_con11').css('color','blue');} else{$('#set59_con11').css('color','red');}		
if($('#set59_con12').text().trim() == '12'){$('#set59_con12').css('color','blue');} else{$('#set59_con12').css('color','red');}
if($('#set59_con13').text().trim() == '13'){$('#set59_con13').css('color','blue');} else{$('#set59_con13').css('color','red');}
if($('#set59_con14').text().trim() == '14'){$('#set59_con14').css('color','blue');} else{$('#set59_con14').css('color','red');}

if(($('#set59_con1').text().trim() == '1') && ($('#set59_con2').text().trim() == '2') && ($('#set59_con3').text().trim() == '3') && ($('#set59_con4').text().trim() == '4') && ($('#set59_con5').text().trim() == '5') && ($('#set59_con6').text().trim() == '6') && ($('#set59_con7').text().trim() == '7') && ($('#set59_con8').text().trim() == '8') && ($('#set59_con9').text().trim() == '9') && ($('#set59_con9').text().trim() == '10') && ($('#set59_con11').text().trim() == '11') && ($('#set59_con12').text().trim() == '12') && ($('#set59_con13').text().trim() == '13') && ($('#set59_con14').text().trim() == '14'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p59').attr('contenteditable', false); 
			$('.p59').css('color', 'blue'); 
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
