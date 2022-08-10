$(function(){

$('#_idContainer052').bind('touchstart click',function(e){
video_audio('pops5','video5','audio');
});
$('#video5').on('play',function(e){
	videoon('audio','video5');
});
$('#video5').on('pause',function(e){
	videooff('audio','video5');
});
$('#audio').on('pause',function(e){
e.preventDefault();	
	audiooff('audio','video5');
});





$('#_idContainer042').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer028').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer046').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer033').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

	dragdrop('box1','text4');
	dragdrop('box2','text5');
	dragdrop('box3','text1');
	dragdrop('box4','text2');
	dragdrop('box5','text3');

$('#submit01').bind('touchstart click',function(e){
	$('.p07_input_text1').css({
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
