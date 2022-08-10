$(function(){
$('#_idContainer1939').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});
$('#_idContainer1997').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer2001').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer2006').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer2011').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer2016').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer2021').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

dragdrop('box1','text2');
dragdrop('box2','text4');
dragdrop('box3','text3');
dragdrop('box4','text5');
dragdrop('box5','text1');
dragdrop('box6','text6');


$('#submit03').bind('touchstart click',function(e){
	$('.p37_input_text1').css({
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
