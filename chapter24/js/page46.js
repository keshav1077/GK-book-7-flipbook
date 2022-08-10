$(function(){
$('.position_46').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('#_idContainer2892').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer2790').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer2835').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer2797').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer2801').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer2807').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer2850').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});
$('#_idContainer2864').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});
$('#_idContainer2878').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});
$('#_idContainer2857').bind('touchstart click',function(e){
for_popup1_v('pops11','pbutton11','video11');
});
$('#_idContainer2871').bind('touchstart click',function(e){
for_popup1_v('pops12','pbutton12','video12');
});
$('#_idContainer2885').bind('touchstart click',function(e){
for_popup1_v('pops13','pbutton13','video13');
});
	dragdrop_transform('box1','text1');
	dragdrop('box2','text2');
	dragdrop_transform('box3','text3');
	dragdrop_transform('box4','text4');
	dragdrop_transform('box5','text5');

	dragdrop_transform('box6','text6');
	dragdrop_transform('box7','text7');
	dragdrop_transform('box8','text8');
	dragdrop_transform('box9','text9');
	dragdrop_transform('box10','text10');
	dragdrop_transform('box11','text11');

$('#submit01').bind('touchstart click',function(e){
	$('.p46_input_text1').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text').css('cursor','default');
	$('.text').text('');
});
$('#submit02').bind('touchstart click',function(e){
	$('.p46_input_text2').css({
		display: 'block',
		color: 'blue'
	});
	$(this).css('opacity','0.7');
	$(this).off('click');
	$(this).css('cursor','default');
	$('.text_p46').css('cursor','default');
	$('.text_p46').text('');
});
});
