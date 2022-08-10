$(window).load(function() {
	$('.tic').on('click',tic1);
});

$(function(){

$('#submit01').bind('touchstart click',function(e){
	$(this).css('opacity','0.5');
		$('.tic.t1').addClass('tic_green');
		$('.tic').removeClass('tic_black');
		$('.tic').removeClass('tic_red');
		$('.tic').off("click");
});

$('#submit02').click(function(){		
var w=0;
var r=0;
$('.tic').each(function()
{
	if($(this).hasClass('tic_black') && $(this).hasClass('t1'))
	{
	$(this).addClass('tic_green');
	r=r+1;
	}
	else if($(this).hasClass('tic_black') && $(this).hasClass('w1'))
	{
	$(this).addClass('tic_red');
	w=w+1;
	}
	else
	{
	}
});

	if(r == 7 && w == 0) 
	{
	
				$('#submit02').attr('disabled','disabled');	
				$('.tic').off('click');
        	
}
else
{
				

}

});

	dragdrop('box1','text5');
	dragdrop('box2','text4');
	dragdrop('box3','text2');
	dragdrop('box4','text1');
	dragdrop('box5','text3');


$('#submit05').bind('touchstart click',function(e){
	$('.p28_input_text1').css({
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

function tic1() {
	$(this).toggleClass('coloured');
	$(this).toggleClass('tic_black');
	$(this).removeClass('tic_red');
	$(this).prevAll().removeClass('tic_black');
	$(this).nextAll().removeClass('tic_black');
	$(this).prevAll().removeClass('tic_red');
	$(this).nextAll().removeClass('tic_red');
}
