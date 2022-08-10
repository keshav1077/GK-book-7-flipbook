$(function(){

$('#submit04').bind('touchstart click',function(e){
	$(this).css('opacity','0.7');
		$('.p68').each(function(index, val) {
		 temp = $(this).attr("data-val");
		 $(this).text(temp);
		 $(this).css('color','green');
		 $(this).attr('contenteditable', false);
		 });
		$('#set68_con1').html("White marble was used in the construction of the main mausoleum. Semi-precious stones like jade, crystal, lapis lazuli, amethyst and turquoise along with rare stones like <i>tilai</i> (goldstone), <i>zahar-mohra</i>, <i>ajuba</i>, <i>abri</i>, <i>khathu</i>, <i>nakhod</i> and <i>maknatis</i> (magnet stone) were used. ")
		$('#set68_con1').css('color','green');
		$('#set68_con1').attr('contenteditable', false);
});

});