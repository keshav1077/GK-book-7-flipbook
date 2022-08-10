$(function(){
$('#_idContainer2040').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('#_idContainer2041').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer2035').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer2065').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer2042').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer2089').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer2090').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});
$('#_idContainer2075').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
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
if($('#set38_con1').text().trim() == 'G' | $('#set38_con1').text().trim() == 'g'){$('#set38_con1').css('color','blue');} else{$('#set38_con1').css('color','red');}		
if($('#set38_con2').text().trim() == 'H' | $('#set38_con2').text().trim() == 'h'){$('#set38_con2').css('color','blue');} else{$('#set38_con2').css('color','red');}
if($('#set38_con3').text().trim() == 'F' | $('#set38_con3').text().trim() == 'f'){$('#set38_con3').css('color','blue');} else{$('#set38_con3').css('color','red');}
if($('#set38_con4').text().trim() == 'E' | $('#set38_con4').text().trim() == 'e'){$('#set38_con4').css('color','blue');} else{$('#set38_con4').css('color','red');}
if($('#set38_con5').text().trim() == 'D' | $('#set38_con5').text().trim() == 'd'){$('#set38_con5').css('color','blue');} else{$('#set38_con5').css('color','red');}
if($('#set38_con6').text().trim() == 'C' | $('#set38_con6').text().trim() == 'c'){$('#set38_con6').css('color','blue');} else{$('#set38_con6').css('color','red');}
if($('#set38_con7').text().trim() == 'A' | $('#set38_con7').text().trim() == 'a'){$('#set38_con7').css('color','blue');} else{$('#set38_con7').css('color','red');}
if($('#set38_con8').text().trim() == 'B' | $('#set38_con8').text().trim() == 'b'){$('#set38_con8').css('color','blue');} else{$('#set38_con8').css('color','red');}

if(($('#set38_con1').text().trim() == 'G' | $('#set38_con1').text().trim() == 'g') && ($('#set38_con2').text().trim() == 'H' | $('#set38_con2').text().trim() == 'h') && ($('#set38_con3').text().trim() == 'F' | $('#set38_con3').text().trim() == 'f') && ($('#set38_con4').text().trim() == 'E' | $('#set38_con4').text().trim() == 'e') && ($('#set38_con5').text().trim() == 'D' | $('#set38_con5').text().trim() == 'd') && ($('#set38_con6').text().trim() == 'C' | $('#set38_con6').text().trim() == 'c') && ($('#set38_con7').text().trim() == 'A' | $('#set38_con7').text().trim() == 'a') && ($('#set38_con8').text().trim() == 'B' | $('#set38_con8').text().trim() == 'B'))
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





});
