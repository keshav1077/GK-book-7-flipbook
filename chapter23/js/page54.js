$(function(){
$('#_idContainer3240').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('.page54_2').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('.page54_3').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('.page54_5').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

	dragdrop_transform('box1','text1');
	dragdrop_transform('box2','text2');
	dragdrop_transform('box3','text3');
	dragdrop_transform('box4','text4');
	dragdrop_transform('box5','text5');
	dragdrop_transform('box6','text6');

$('#submit01').bind('touchstart click',function(e){
	$('.p54_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text('');
});



$('#submit02').click(function(){
	$(this).css('opacity','0.5');
		$('.p55').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
});

$('#submit03').click(function(){
if($('#set55_con1').text().trim() == 'T' | $('#set55_con1').text().trim() == 't' | $('#set55_con1').text().trim() == 'TRUE' | $('#set55_con1').text().trim() == 'True' | $('#set55_con1').text().trim() == 'true'){$('#set55_con1').css('color','blue');} else{$('#set55_con1').css('color','red');}		
if($('#set55_con2').text().trim() == 'T' | $('#set55_con2').text().trim() == 't' | $('#set55_con2').text().trim() == 'TRUE' | $('#set55_con2').text().trim() == 'True' | $('#set55_con2').text().trim() == 'true'){$('#set55_con2').css('color','blue');} else{$('#set55_con2').css('color','red');}
if($('#set55_con3').text().trim() == 'F' | $('#set55_con3').text().trim() == 'f' | $('#set55_con3').text().trim() == 'FALSE' | $('#set55_con3').text().trim() == 'False' | $('#set55_con3').text().trim() == 'false'){$('#set55_con3').css('color','blue');} else{$('#set55_con3').css('color','red');}
if($('#set55_con4').text().trim() == 'T' | $('#set55_con4').text().trim() == 't' | $('#set55_con4').text().trim() == 'TRUE' | $('#set55_con4').text().trim() == 'True' | $('#set55_con4').text().trim() == 'true'){$('#set55_con4').css('color','blue');} else{$('#set55_con4').css('color','red');}
if($('#set55_con5').text().trim() == 'F' | $('#set55_con5').text().trim() == 'f' | $('#set55_con5').text().trim() == 'FALSE' | $('#set55_con5').text().trim() == 'False' | $('#set55_con5').text().trim() == 'false'){$('#set55_con5').css('color','blue');} else{$('#set55_con5').css('color','red');}

if(($('#set55_con1').text().trim() == 'T' | $('#set55_con1').text().trim() == 't' | $('#set55_con1').text().trim() == 'TRUE' | $('#set55_con1').text().trim() == 'True' | $('#set55_con1').text().trim() == 'true') && ($('#set55_con2').text().trim() == 'T' | $('#set55_con2').text().trim() == 't' | $('#set55_con2').text().trim() == 'TRUE' | $('#set55_con2').text().trim() == 'True' | $('#set55_con2').text().trim() == 'true') && ($('#set55_con3').text().trim() == 'F' | $('#set55_con3').text().trim() == 'f' | $('#set55_con3').text().trim() == 'FALSE' | $('#set55_con3').text().trim() == 'Flase' | $('#set55_con3').text().trim() == 'false') && ($('#set55_con4').text().trim() == 'T' | $('#set55_con4').text().trim() == 't' | $('#set55_con4').text().trim() == 'TRUE' | $('#set55_con4').text().trim() == 'True' | $('#set55_con4').text().trim() == 'true') && ($('#set55_con5').text().trim() == 'F' | $('#set55_con5').text().trim() == 'f' | $('#set55_con5').text().trim() == 'FALSE' | $('#set55_con5').text().trim() == 'False' | $('#set55_con5').text().trim() == 'false'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p55').attr('contenteditable', false); 
			$('.p55').css('color', 'blue'); 
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




$('#submit04').click(function(){
	$(this).css('opacity','0.5');
		$('.p55_1').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
		$('.p55_11').each(function(index, val) {
		 $(this).html("Bharatiya Janta Party");
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });

		$('.p55_1_12').each(function(index, val) {
		 $(this).html("Indian National Congress");
		 $(this).css('color','blue');
		 $(this).attr('contenteditable', false);
		 });
		
});


$('#submit05').click(function(){
if($('#set55_con11').text().trim() == 'Bharatiya Janta Party'){$('#set55_con11').css('color','blue');} else{$('#set55_con11').css('color','red');}		
if($('#set55_con12').text().trim() == 'Indian National Congress'){$('#set55_con12').css('color','blue');} else{$('#set55_con12').css('color','red');}
if($('#set55_con13').text().trim() == 'Communist Party of India'){$('#set55_con13').css('color','blue');} else{$('#set55_con13').css('color','red');}
if($('#set55_con14').text().trim() == 'Bahujan Samaj Party'){$('#set55_con14').css('color','blue');} else{$('#set55_con14').css('color','red');}
if($('#set55_con15').text().trim() == 'Aam Aadmi Party'){$('#set55_con15').css('color','blue');} else{$('#set55_con15').css('color','red');}
if($('#set55_con16').text().trim() == "National People's Party"){$('#set55_con16').css('color','blue');} else{$('#set55_con16').css('color','red');}

if($('#set55_con21').text().trim() == 'lotus'){$('#set55_con21').css('color','blue');} else{$('#set55_con21').css('color','red');}		
if($('#set55_con22').text().trim() == 'hand'){$('#set55_con22').css('color','blue');} else{$('#set55_con22').css('color','red');}
if($('#set55_con23').text().trim() == 'ears of corn and sickle'){$('#set55_con23').css('color','blue');} else{$('#set55_con23').css('color','red');}
if($('#set55_con24').text().trim() == 'elephant'){$('#set55_con24').css('color','blue');} else{$('#set55_con24').css('color','red');}
if($('#set55_con25').text().trim() == 'broom'){$('#set55_con25').css('color','blue');} else{$('#set55_con25').css('color','red');}
if($('#set55_con26').text().trim() == 'book'){$('#set55_con26').css('color','blue');} else{$('#set55_con26').css('color','red');}


if(($('#set55_con11').text().trim() == 'Bharatiya Janta Party') && ($('#set55_con12').text().trim() == 'Indian National Congress') && ($('#set55_con13').text().trim() == 'Communist Party of India') && ($('#set55_con14').text().trim() == 'Bahujan Samaj Party') && ($('#set55_con15').text().trim() == 'Aam Aadmi Party') && ($('#set55_con16').text().trim() == "National People's Party") && ($('#set55_con21').text().trim() == 'lotus') && ($('#set55_con22').text().trim() == 'hand') && ($('#set55_con23').text().trim() == 'ears of corn and sickle') && ($('#set55_con24').text().trim() == 'elephant') && ($('#set55_con25').text().trim() == 'broom') && ($('#set55_con26').text().trim() == 'book'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p55_1').attr('contenteditable', false); 
			$('.p55_1').css('color', 'blue'); 
			$('#submit05').off('click');
		}
		else
		{
			$('#submit05').on('click');
			$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
		}
	});

});
