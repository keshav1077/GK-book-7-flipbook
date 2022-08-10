setInterval(function(){
	if ( $("#popst,#popst1").is(":visible") || $("#pops").is(":visible") || $("#pop").is(":visible")) {

						document.onkeydown = function (e) {
        			return false;
				}
	} else { 
		// make = $("#othermake").val(); 
						document.onkeydown = function (e) {
        			return true;
				}		
	}
},100);


$(window).load(function() {

$('.input_text,.y_box,.yellow_box').keydown(function(e){
if(e.keyCode==13) {
	e.preventDefault();
	}
});

});