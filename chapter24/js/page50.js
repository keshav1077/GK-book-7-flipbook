$(function(){
$('.position_51').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#submit1').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.match50').css('display','block');
		$('.incorrect').css('display','none');
		$('.Match1').off("click");
});

	dragdrop('box1','text1');
	dragdrop('box2','text2');
	dragdrop('box3','text3');
	dragdrop('box4','text4');
	dragdrop('box5','text5');
	dragdrop('box6','text6');
	dragdrop('box7','text7');

$('#submit02').bind('touchstart click',function(e){
	$('.p51_input_text1').css({
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
