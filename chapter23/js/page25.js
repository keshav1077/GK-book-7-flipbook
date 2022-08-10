$(function(){

$('.position_43').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});


$('#submit1').bind('touchstart click',function(e){
		$(this).css('opacity','0.5');
		$(this).css('cursor','default');
		$('.match11').css('display','block');
		$('.incorrect').css('display','none');
		$('.Match1').off("click");
});

});
