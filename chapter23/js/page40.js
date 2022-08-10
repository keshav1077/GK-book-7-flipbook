$(function(){
$('#_idContainer2239').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('#_idContainer2230').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer2221').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer2254').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer2285').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer2294').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer2276').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

dragdrop('box1','text5');
dragdrop('box2','text3');
dragdrop('box3','text4');
dragdrop('box4','text1');
dragdrop('box5','text6');
dragdrop('box6','text8');
dragdrop('box7','text9');
dragdrop('box8','text2');
dragdrop('box9','text7');


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

$('#submit02').bind('touchstart click',function(e){
	$('.p13_input_text1').css({
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
