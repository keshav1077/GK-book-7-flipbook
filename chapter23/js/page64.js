$(function(){

$('.position_64').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

	dragdrop('box1','text8');
	dragdrop('box2','text3');
	dragdrop('box3','text5');
	dragdrop('box4','text6');
	dragdrop('box5','text2');
	dragdrop('box6','text1');
	dragdrop('box7','text7');
	dragdrop('box8','text4');

$('#submit01').bind('touchstart click',function(e){
	$('.p64_input_text1').css({
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
