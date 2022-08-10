$(function(){
$('.position_48').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer2983').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer2985').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer2988').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
	dragdrop('box1','text1');
	dragdrop('box2','text2');
	dragdrop('box3','text3');
	dragdrop('box4','text4');
	dragdrop('box5','text5');
	dragdrop('box6','text6');

$('#submit01').bind('touchstart click',function(e){
	$('.p49_input_text1').css({
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
