$(function(){

$('#_idContainer1133').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('#_idContainer1140').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer1141').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer1139').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer1116').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer1167').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer1168').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});
$('#_idContainer1169').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});
$('#_idContainer1170').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});
$('#_idContainer1171').bind('touchstart click',function(e){
for_popup1_v('pops10','pbutton10','video10');
});

	dragdrop('box1','text4');
	dragdrop('box2','text10');
	dragdrop('box3','text2');
	dragdrop('box4','text9');
	dragdrop('box5','text6');
	dragdrop('box6','text3');
	dragdrop('box7','text1');
	dragdrop('box8','text8');
	dragdrop('box9','text7');
	dragdrop('box10','text5');

$('#submit01').bind('touchstart click',function(e){
	$('.p26_input_text1').css({
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
