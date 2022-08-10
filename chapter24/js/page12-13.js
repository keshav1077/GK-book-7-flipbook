$(function(){

dragdrop('box1','text3');
dragdrop('box2','text1');
dragdrop('box3','text5');
dragdrop('box4','text6');
dragdrop('box5','text4');
dragdrop('box6','text2');

dragdrop1('box7','text8');
dragdrop1('box8','text10');
dragdrop1('box9','text11');
dragdrop1('box10','text7');
dragdrop1('box11','text9');
dragdrop1('box12','text12');

$('#submit01').bind('touchstart click',function(e){
	$('.p12_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text("");
});


$('#_idContainer355').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer333').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer351').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('.position_12').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer348').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer340').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer390').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer410').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});

$('#_idContainer416').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});

$('#_idContainer422').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});

$('#_idContainer429').bind('touchstart click',function(e){
for_popup1_v('pops11','pbutton11','video11');
});

$('#_idContainer436').bind('touchstart click',function(e){
for_popup1_v('pops12','pbutton12','video12');
});


$('#submit02').bind('touchstart click',function(e){
	$('.p13_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text_p12').css('cursor','default');
	$('.text_p12').text("");
});

});
