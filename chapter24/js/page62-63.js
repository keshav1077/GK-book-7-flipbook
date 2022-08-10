$(window).load(function() {
	$('#opt1 .tickbox,#opt2 .tickbox,#opt3 .tickbox,#opt4 .tickbox,#opt5 .tickbox,#opt6 .tickbox,#opt7 .tickbox,#opt8 .tickbox').on('click',tick);
});

$(function(){
$( ".p62_1" ).dblclick(function() {
	$('#set62_con1').addClass('tickbox_wrong');
});
$( ".p62_2" ).dblclick(function() {
	$('#set62_con2').addClass('tickbox_wrong');
});
$( ".p62_3" ).dblclick(function() {
	$('#set62_con3').addClass('tickbox_wrong');
});
$( ".p62_4" ).dblclick(function() {
	$('#set62_con4').addClass('tickbox_wrong');
});
$( ".p62_5" ).dblclick(function() {
	$('#set62_con5').addClass('tickbox_wrong');
});
$( ".p62_6" ).dblclick(function() {
	$('#set62_con6').addClass('tickbox_wrong');
});
$( ".p62_7" ).dblclick(function() {
	$('#set62_con7').addClass('tickbox_wrong');
});
$( ".p62_8" ).dblclick(function() {
	$('#set62_con8').addClass('tickbox_wrong');
});

$('#submit01').bind('touchstart click',function(e){
	$(this).css('opacity','0.5');
	//$('.t1').removeClass('tickbox').addClass('tickbox_right');
	$('.tickbox').removeClass('tickbox_wrong');
	$('.t1').addClass('tickbox_right');
	$('.w1').addClass('tickbox_wrong');
	//$('.tickbox').removeClass('tickbox_wrong');

	$('.p62_1,.p62_2,.p62_3,.p62_4,.p62_5,.p62_6,.p62_7,.p62_8,.p62_9,.p62_10,.p62_11,.p62_12').each(function(index, val) {
		$(this).off('click');
		$(this).off('dblclick');
		 });

});


$('#_idContainer275').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer268').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});
$('#_idContainer272').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});
$('#_idContainer278').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});
$('#_idContainer282').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});
$('#_idContainer285').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});
$('#_idContainer288').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});
$('#_idContainer265').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});


	dragdrop('box1','text3');
	dragdrop('box2','text7');
	dragdrop('box3','text2');
	dragdrop('box4','text1');
	dragdrop('box5','text6');
	dragdrop('box6','text4');
	dragdrop('box7','text8');
	dragdrop('box8','text5');


$('#submit03').bind('touchstart click',function(e){
	$('.p63_input_text1').css({
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


function tick() {
	$(this).toggleClass('coloured');
	$(this).toggleClass('tickbox_right');
	$(this).parent().prevAll().find('.tickbox').removeClass('tickbox_right');
	$(this).parent().nextAll().find('.tickbox').removeClass('tickbox_right');
	$(this).parent().prevAll().find('.tickbox').removeClass('tickbox_wrong');
	$(this).parent().nextAll().find('.tickbox').removeClass('tickbox_wrong');
	}
