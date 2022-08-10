$(function(){
$('#_idContainer1205').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('#_idContainer1226').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer1227').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer1243').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer1260').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer1234').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});


$('#submit03').click(function(){
	$(this).css('opacity','0.5');
		$('.p29').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
});

$('#submit04').click(function(){
if($('#set29_con1').text().trim() == 'T' | $('#set29_con1').text().trim() == 't' | $('#set29_con1').text().trim() == 'TRUE' | $('#set29_con1').text().trim() == 'True' | $('#set29_con1').text().trim() == 'true'){$('#set29_con1').css('color','blue');} else{$('#set29_con1').css('color','red');}		
if($('#set29_con2').text().trim() == 'F' | $('#set29_con2').text().trim() == 'f' | $('#set29_con2').text().trim() == 'FALSE' | $('#set29_con2').text().trim() == 'False' | $('#set29_con2').text().trim() == 'false'){$('#set29_con2').css('color','blue');} else{$('#set29_con2').css('color','red');}
if($('#set29_con3').text().trim() == 'F' | $('#set29_con3').text().trim() == 'f' | $('#set29_con3').text().trim() == 'FALSE' | $('#set29_con3').text().trim() == 'False' | $('#set29_con3').text().trim() == 'false'){$('#set29_con3').css('color','blue');} else{$('#set29_con3').css('color','red');}
if($('#set29_con4').text().trim() == 'T' | $('#set29_con4').text().trim() == 't' | $('#set29_con4').text().trim() == 'TRUE' | $('#set29_con4').text().trim() == 'True' | $('#set29_con4').text().trim() == 'true'){$('#set29_con4').css('color','blue');} else{$('#set29_con4').css('color','red');}
if($('#set29_con5').text().trim() == 'T' | $('#set29_con5').text().trim() == 't' | $('#set29_con5').text().trim() == 'TRUE' | $('#set29_con5').text().trim() == 'True' | $('#set29_con5').text().trim() == 'true'){$('#set29_con5').css('color','blue');} else{$('#set29_con5').css('color','red');}
if($('#set29_con6').text().trim() == 'F' | $('#set29_con6').text().trim() == 'f' | $('#set29_con6').text().trim() == 'FALSE' | $('#set29_con6').text().trim() == 'False' | $('#set29_con6').text().trim() == 'false'){$('#set29_con6').css('color','blue');} else{$('#set29_con6').css('color','red');}
if($('#set29_con7').text().trim() == 'T' | $('#set29_con7').text().trim() == 't' | $('#set29_con7').text().trim() == 'TRUE' | $('#set29_con7').text().trim() == 'True' | $('#set29_con7').text().trim() == 'true'){$('#set29_con7').css('color','blue');} else{$('#set29_con7').css('color','red');}
if($('#set29_con8').text().trim() == 'T' | $('#set29_con8').text().trim() == 't' | $('#set29_con8').text().trim() == 'TRUE' | $('#set29_con8').text().trim() == 'True' | $('#set29_con8').text().trim() == 'true'){$('#set29_con8').css('color','blue');} else{$('#set29_con8').css('color','red');}
if($('#set29_con9').text().trim() == 'F' | $('#set29_con9').text().trim() == 'f' | $('#set29_con9').text().trim() == 'FALSE' | $('#set29_con9').text().trim() == 'False' | $('#set29_con9').text().trim() == 'false'){$('#set29_con9').css('color','blue');} else{$('#set29_con9').css('color','red');}
if($('#set29_con10').text().trim() == 'T' | $('#set29_con10').text().trim() == 't' | $('#set29_con10').text().trim() == 'TRUE' | $('#set29_con10').text().trim() == 'True' | $('#set29_con10').text().trim() == 'true'){$('#set29_con10').css('color','blue');} else{$('#set29_con10').css('color','red');}

if(($('#set29_con1').text().trim() == 'T' | $('#set29_con1').text().trim() == 't' | $('#set29_con1').text().trim() == 'TRUE' | $('#set29_con1').text().trim() == 'True' | $('#set29_con1').text().trim() == 'true') && ($('#set29_con2').text().trim() == 'F' | $('#set29_con2').text().trim() == 'f' | $('#set29_con2').text().trim() == 'FALSE' | $('#set29_con2').text().trim() == 'False' | $('#set29_con2').text().trim() == 'false') && ($('#set29_con3').text().trim() == 'F' | $('#set29_con3').text().trim() == 'f' | $('#set29_con3').text().trim() == 'FALSE' | $('#set29_con3').text().trim() == 'False' | $('#set29_con3').text().trim() == 'false') && ($('#set29_con4').text().trim() == 'T' | $('#set29_con4').text().trim() == 't' | $('#set29_con4').text().trim() == 'TRUE' | $('#set29_con4').text().trim() == 'True' | $('#set29_con4').text().trim() == 'true') && ($('#set29_con5').text().trim() == 'T' | $('#set29_con5').text().trim() == 't' | $('#set29_con5').text().trim() == 'TRUE' | $('#set29_con5').text().trim() == 'True' | $('#set29_con5').text().trim() == 'true') && ($('#set29_con6').text().trim() == 'F' | $('#set29_con6').text().trim() == 'f' | $('#set29_con6').text().trim() == 'FALSE' | $('#set29_con6').text().trim() == 'False' | $('#set29_con6').text().trim() == 'false') && ($('#set29_con7').text().trim() == 'T' | $('#set29_con7').text().trim() == 't' | $('#set29_con7').text().trim() == 'TRUE' | $('#set29_con7').text().trim() == 'True' | $('#set29_con7').text().trim() == 'true') && ($('#set29_con8').text().trim() == 'T' | $('#set29_con8').text().trim() == 't' | $('#set29_con8').text().trim() == 'TRUE' | $('#set29_con8').text().trim() == 'True' | $('#set29_con8').text().trim() == 'true') && ($('#set29_con9').text().trim() == 'F' | $('#set29_con9').text().trim() == 'f' | $('#set29_con9').text().trim() == 'FALSE' | $('#set29_con9').text().trim() == 'False' | $('#set29_con9').text().trim() == 'false') && ($('#set29_con10').text().trim() == 'T' | $('#set29_con10').text().trim() == 't' | $('#set29_con10').text().trim() == 'TRUE' | $('#set29_con10').text().trim() == 'True' | $('#set29_con10').text().trim() == 'true'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p29').attr('contenteditable', false); 
			$('.p29').css('color', 'blue'); 
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
