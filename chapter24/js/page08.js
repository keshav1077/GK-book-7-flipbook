$(function(){

$('#_idContainer135').bind('touchstart click',function(e){
for_popup1_v('pops1','pbutton1','video1');
});

$('#_idContainer136').bind('touchstart click',function(e){
for_popup1_v('pops2','pbutton2','video2');
});

$('#_idContainer141').bind('touchstart click',function(e){
for_popup1_v('pops3','pbutton3','video3');
});

$('#_idContainer139').bind('touchstart click',function(e){
for_popup1_v('pops4','pbutton4','video4');
});

$('#_idContainer140').bind('touchstart click',function(e){
for_popup1_v('pops5','pbutton5','video5');
});

$('#_idContainer138').bind('touchstart click',function(e){
for_popup1_v('pops6','pbutton6','video6');
});

$('#_idContainer137').bind('touchstart click',function(e){
for_popup1_v('pops7','pbutton7','video7');
});

$('#_idContainer150').bind('touchstart click',function(e){
for_popup1_v('pops8','pbutton8','video8');
});

$('.position_9').bind('touchstart click',function(e){
for_popup1_v('pops9','pbutton9','video9');
});


$('#submit01').bind('touchstart click',function(e){

		$('#page08_con1').text('C');
		$('#page08_con2').text('h');
		$('#page08_con3').text('r');
		$('#page08_con4').text('i');
		$('#page08_con5').text('s');
		$('#page08_con6').text('t');
		$('#page08_con7').text('t');
		$('#page08_con8').text('h');
		$('#page08_con9').text('e');
		$('#page08_con10').text('R');
		$('#page08_con11').text('e');
		$('#page08_con12').text('d');
		$('#page08_con13').text('e');
		$('#page08_con14').text('e');
		$('#page08_con15').text('m');
		$('#page08_con16').text('e');
		$('#page08_con17').text('r');
		
		$('#page08_con18').text('G');
		$('#page08_con19').text('r');
		$('#page08_con20').text('e');
		$('#page08_con21').text('a');
		$('#page08_con22').text('t');
		$('#page08_con23').text('W');
		$('#page08_con24').text('a');
		$('#page08_con25').text('l');
		$('#page08_con26').text('l');
		$('#page08_con27').text('o');
		$('#page08_con28').text('f');
		$('#page08_con29').text('C');
		$('#page08_con30').text('h');
		$('#page08_con31').text('i');
		$('#page08_con32').text('n');
		$('#page08_con33').text('a');

		$('#page08_con34').text('M');
		$('#page08_con35').text('a');
		$('#page08_con36').text('c');
		$('#page08_con37').text('h');
		$('#page08_con38').text('u');
		$('#page08_con39').text('P');
		$('#page08_con40').text('i');
		$('#page08_con41').text('c');
		$('#page08_con42').text('c');
		$('#page08_con43').text('h');
		$('#page08_con44').text('u');

		$('#page08_con45').text('P');
		$('#page08_con46').text('e');
		$('#page08_con47').text('t');
		$('#page08_con48').text('r');
		$('#page08_con49').text('a');

		$('#page08_con50').text('C');
		$('#page08_con51').text('h');
		$('#page08_con52').text('i');
		$('#page08_con53').text('c');
		$('#page08_con54').text('h');
		$('#page08_con55').text('e');
		$('#page08_con56').text('n');
		$('#page08_con57').text('I');
		$('#page08_con58').text('t');
		$('#page08_con59').text('z');
		$('#page08_con60').text('a');

		$('#page08_con61').text('T');
		$('#page08_con62').text('a');
		$('#page08_con63').text('j');
		$('#page08_con64').text('m');
		$('#page08_con65').text('a');
		$('#page08_con66').text('h');
		$('#page08_con67').text('a');
		$('#page08_con68').text('l');

		$('#page08_con69').text('C');
		$('#page08_con70').text('o');
		$('#page08_con71').text('l');
		$('#page08_con72').text('o');
		$('#page08_con73').text('s');
		$('#page08_con74').text('s');
		$('#page08_con75').text('e');
		$('#page08_con76').text('u');
		$('#page08_con77').text('m');

		$(this).css('opacity','0.7');
		$(this).off('click');
		$(this).css('cursor','default');

		$('.p08').each(function(index, val) {
		$(this).css('color','blue');
		$(this).attr('contenteditable', false);
		$('#page08_con77').css('display','none');
		$('#page08_con30').css('display','none');
		$('#page08_con40').css('display','none');
		$('#page08_con55').css('display','none');
		$('#page08_con58').css('display','none');
		$('#page08_con69').css('display','none');
		});
});

$('#submit02').bind('touchstart click',function(e){

if($('#page08_con1').text().trim() == 'C' | $('#page08_con1').text().trim() == 'c'){$('#page08_con1').css('color','blue');} else{$('#page08_con1').css('color','red');}		
if($('#page08_con2').text().trim() == 'H' | $('#page08_con2').text().trim() == 'h'){$('#page08_con2').css('color','blue');} else{$('#page08_con2').css('color','red');}
if($('#page08_con3').text().trim() == 'R' | $('#page08_con3').text().trim() == 'r'){$('#page08_con3').css('color','blue');} else{$('#page08_con3').css('color','red');}
if($('#page08_con4').text().trim() == 'I' | $('#page08_con4').text().trim() == 'i'){$('#page08_con4').css('color','blue');} else{$('#page08_con4').css('color','red');}
if($('#page08_con5').text().trim() == 'S' | $('#page08_con5').text().trim() == 's'){$('#page08_con5').css('color','blue');} else{$('#page08_con5').css('color','red');}
if($('#page08_con6').text().trim() == 'T' | $('#page08_con6').text().trim() == 't'){$('#page08_con6').css('color','blue');} else{$('#page08_con6').css('color','red');}
if($('#page08_con7').text().trim() == 'T' | $('#page08_con7').text().trim() == 't'){$('#page08_con7').css('color','blue');} else{$('#page08_con7').css('color','red');}
if($('#page08_con8').text().trim() == 'H' | $('#page08_con8').text().trim() == 'h'){$('#page08_con8').css('color','blue');} else{$('#page08_con8').css('color','red');}
if($('#page08_con9').text().trim() == 'E' | $('#page08_con9').text().trim() == 'e'){$('#page08_con9').css('color','blue');} else{$('#page08_con9').css('color','red');}
if($('#page08_con10').text().trim() == 'R' | $('#page08_con10').text().trim() == 'r'){$('#page08_con10').css('color','blue');} else{$('#page08_con10').css('color','red');}
if($('#page08_con11').text().trim() == 'E' | $('#page08_con11').text().trim() == 'e'){$('#page08_con11').css('color','blue');} else{$('#page08_con11').css('color','red');}		
if($('#page08_con12').text().trim() == 'D' | $('#page08_con12').text().trim() == 'd'){$('#page08_con12').css('color','blue');} else{$('#page08_con12').css('color','red');}
if($('#page08_con13').text().trim() == 'E' | $('#page08_con13').text().trim() == 'e'){$('#page08_con13').css('color','blue');} else{$('#page08_con13').css('color','red');}
if($('#page08_con14').text().trim() == 'E' | $('#page08_con14').text().trim() == 'e'){$('#page08_con14').css('color','blue');} else{$('#page08_con14').css('color','red');}
if($('#page08_con15').text().trim() == 'M' | $('#page08_con15').text().trim() == 'm'){$('#page08_con15').css('color','blue');} else{$('#page08_con15').css('color','red');}
if($('#page08_con16').text().trim() == 'E' | $('#page08_con16').text().trim() == 'e'){$('#page08_con16').css('color','blue');} else{$('#page08_con16').css('color','red');}
if($('#page08_con17').text().trim() == 'R' | $('#page08_con17').text().trim() == 'r'){$('#page08_con17').css('color','blue');} else{$('#page08_con17').css('color','red');}

if($('#page08_con18').text().trim() == 'G' | $('#page08_con18').text().trim() == 'g'){$('#page08_con18').css('color','blue');} else{$('#page08_con18').css('color','red');}
if($('#page08_con19').text().trim() == 'R' | $('#page08_con19').text().trim() == 'r'){$('#page08_con19').css('color','blue');} else{$('#page08_con19').css('color','red');}
if($('#page08_con20').text().trim() == 'E' | $('#page08_con20').text().trim() == 'e'){$('#page08_con20').css('color','blue');} else{$('#page08_con20').css('color','red');}		
if($('#page08_con21').text().trim() == 'A' | $('#page08_con21').text().trim() == 'a'){$('#page08_con21').css('color','blue');} else{$('#page08_con21').css('color','red');}
if($('#page08_con22').text().trim() == 'T' | $('#page08_con22').text().trim() == 't'){$('#page08_con22').css('color','blue');} else{$('#page08_con22').css('color','red');}
if($('#page08_con23').text().trim() == 'W' | $('#page08_con23').text().trim() == 'w'){$('#page08_con23').css('color','blue');} else{$('#page08_con23').css('color','red');}
if($('#page08_con24').text().trim() == 'A' | $('#page08_con24').text().trim() == 'a'){$('#page08_con24').css('color','blue');} else{$('#page08_con24').css('color','red');}
if($('#page08_con25').text().trim() == 'L' | $('#page08_con25').text().trim() == 'l'){$('#page08_con25').css('color','blue');} else{$('#page08_con25').css('color','red');}
if($('#page08_con26').text().trim() == 'L' | $('#page08_con26').text().trim() == 'l'){$('#page08_con26').css('color','blue');} else{$('#page08_con26').css('color','red');}
if($('#page08_con27').text().trim() == 'O' | $('#page08_con27').text().trim() == 'o'){$('#page08_con27').css('color','blue');} else{$('#page08_con27').css('color','red');}
if($('#page08_con28').text().trim() == 'F' | $('#page08_con28').text().trim() == 'f'){$('#page08_con28').css('color','blue');} else{$('#page08_con28').css('color','red');}
if($('#page08_con29').text().trim() == 'C' | $('#page08_con29').text().trim() == 'c'){$('#page08_con29').css('color','blue');} else{$('#page08_con29').css('color','red');}		
if($('#page08_con30').text().trim() == 'H' | $('#page08_con30').text().trim() == 'h'){$('#page08_con30').css('color','blue');} else{$('#page08_con30').css('color','red');}
if($('#page08_con31').text().trim() == 'I' | $('#page08_con31').text().trim() == 'i'){$('#page08_con31').css('color','blue');} else{$('#page08_con31').css('color','red');}
if($('#page08_con32').text().trim() == 'N' | $('#page08_con32').text().trim() == 'n'){$('#page08_con32').css('color','blue');} else{$('#page08_con32').css('color','red');}
if($('#page08_con33').text().trim() == 'A' | $('#page08_con33').text().trim() == 'a'){$('#page08_con33').css('color','blue');} else{$('#page08_con33').css('color','red');}

if($('#page08_con34').text().trim() == 'M' | $('#page08_con34').text().trim() == 'm'){$('#page08_con34').css('color','blue');} else{$('#page08_con34').css('color','red');}
if($('#page08_con35').text().trim() == 'A' | $('#page08_con35').text().trim() == 'a'){$('#page08_con35').css('color','blue');} else{$('#page08_con35').css('color','red');}
if($('#page08_con36').text().trim() == 'C' | $('#page08_con36').text().trim() == 'c'){$('#page08_con36').css('color','blue');} else{$('#page08_con36').css('color','red');}
if($('#page08_con37').text().trim() == 'H' | $('#page08_con37').text().trim() == 'h'){$('#page08_con37').css('color','blue');} else{$('#page08_con37').css('color','red');}
if($('#page08_con38').text().trim() == 'U' | $('#page08_con38').text().trim() == 'u'){$('#page08_con38').css('color','blue');} else{$('#page08_con38').css('color','red');}		
if($('#page08_con39').text().trim() == 'P' | $('#page08_con39').text().trim() == 'p'){$('#page08_con39').css('color','blue');} else{$('#page08_con39').css('color','red');}
if($('#page08_con40').text().trim() == 'I' | $('#page08_con40').text().trim() == 'i'){$('#page08_con40').css('color','blue');} else{$('#page08_con40').css('color','red');}
if($('#page08_con41').text().trim() == 'C' | $('#page08_con41').text().trim() == 'c'){$('#page08_con41').css('color','blue');} else{$('#page08_con41').css('color','red');}
if($('#page08_con42').text().trim() == 'C' | $('#page08_con42').text().trim() == 'c'){$('#page08_con42').css('color','blue');} else{$('#page08_con42').css('color','red');}
if($('#page08_con43').text().trim() == 'H' | $('#page08_con43').text().trim() == 'h'){$('#page08_con43').css('color','blue');} else{$('#page08_con43').css('color','red');}
if($('#page08_con44').text().trim() == 'U' | $('#page08_con44').text().trim() == 'u'){$('#page08_con44').css('color','blue');} else{$('#page08_con44').css('color','red');}

if($('#page08_con45').text().trim() == 'P' | $('#page08_con45').text().trim() == 'p'){$('#page08_con45').css('color','blue');} else{$('#page08_con45').css('color','red');}
if($('#page08_con46').text().trim() == 'E' | $('#page08_con46').text().trim() == 'e'){$('#page08_con46').css('color','blue');} else{$('#page08_con46').css('color','red');}
if($('#page08_con47').text().trim() == 'T' | $('#page08_con47').text().trim() == 't'){$('#page08_con47').css('color','blue');} else{$('#page08_con47').css('color','red');}		
if($('#page08_con48').text().trim() == 'R' | $('#page08_con48').text().trim() == 'r'){$('#page08_con48').css('color','blue');} else{$('#page08_con48').css('color','red');}
if($('#page08_con49').text().trim() == 'A' | $('#page08_con49').text().trim() == 'a'){$('#page08_con49').css('color','blue');} else{$('#page08_con49').css('color','red');}

if($('#page08_con50').text().trim() == 'C' | $('#page08_con50').text().trim() == 'c'){$('#page08_con50').css('color','blue');} else{$('#page08_con50').css('color','red');}
if($('#page08_con51').text().trim() == 'H' | $('#page08_con51').text().trim() == 'h'){$('#page08_con51').css('color','blue');} else{$('#page08_con51').css('color','red');}
if($('#page08_con52').text().trim() == 'I' | $('#page08_con52').text().trim() == 'i'){$('#page08_con52').css('color','blue');} else{$('#page08_con52').css('color','red');}
if($('#page08_con53').text().trim() == 'C' | $('#page08_con53').text().trim() == 'c'){$('#page08_con53').css('color','blue');} else{$('#page08_con53').css('color','red');}
if($('#page08_con54').text().trim() == 'H' | $('#page08_con54').text().trim() == 'h'){$('#page08_con54').css('color','blue');} else{$('#page08_con54').css('color','red');}
if($('#page08_con55').text().trim() == 'E' | $('#page08_con55').text().trim() == 'e'){$('#page08_con55').css('color','blue');} else{$('#page08_con55').css('color','red');}
if($('#page08_con56').text().trim() == 'N' | $('#page08_con56').text().trim() == 'n'){$('#page08_con56').css('color','blue');} else{$('#page08_con56').css('color','red');}		
if($('#page08_con57').text().trim() == 'I' | $('#page08_con57').text().trim() == 'i'){$('#page08_con57').css('color','blue');} else{$('#page08_con57').css('color','red');}
if($('#page08_con58').text().trim() == 'T' | $('#page08_con58').text().trim() == 't'){$('#page08_con58').css('color','blue');} else{$('#page08_con58').css('color','red');}
if($('#page08_con59').text().trim() == 'Z' | $('#page08_con59').text().trim() == 'z'){$('#page08_con59').css('color','blue');} else{$('#page08_con59').css('color','red');}
if($('#page08_con60').text().trim() == 'A' | $('#page08_con60').text().trim() == 'a'){$('#page08_con60').css('color','blue');} else{$('#page08_con60').css('color','red');}

if($('#page08_con61').text().trim() == 'T' | $('#page08_con61').text().trim() == 't'){$('#page08_con61').css('color','blue');} else{$('#page08_con61').css('color','red');}
if($('#page08_con62').text().trim() == 'A' | $('#page08_con62').text().trim() == 'a'){$('#page08_con62').css('color','blue');} else{$('#page08_con62').css('color','red');}
if($('#page08_con63').text().trim() == 'J' | $('#page08_con63').text().trim() == 'j'){$('#page08_con63').css('color','blue');} else{$('#page08_con63').css('color','red');}
if($('#page08_con64').text().trim() == 'M' | $('#page08_con64').text().trim() == 'm'){$('#page08_con64').css('color','blue');} else{$('#page08_con64').css('color','red');}
if($('#page08_con65').text().trim() == 'A' | $('#page08_con65').text().trim() == 'a'){$('#page08_con65').css('color','blue');} else{$('#page08_con65').css('color','red');}		
if($('#page08_con66').text().trim() == 'H' | $('#page08_con66').text().trim() == 'h'){$('#page08_con66').css('color','blue');} else{$('#page08_con66').css('color','red');}
if($('#page08_con67').text().trim() == 'A' | $('#page08_con67').text().trim() == 'a'){$('#page08_con67').css('color','blue');} else{$('#page08_con67').css('color','red');}
if($('#page08_con68').text().trim() == 'L' | $('#page08_con68').text().trim() == 'l'){$('#page08_con68').css('color','blue');} else{$('#page08_con68').css('color','red');}

if($('#page08_con69').text().trim() == 'C' | $('#page08_con69').text().trim() == 'c'){$('#page08_con69').css('color','blue');} else{$('#page08_con69').css('color','red');}
if($('#page08_con70').text().trim() == 'O' | $('#page08_con70').text().trim() == 'o'){$('#page08_con70').css('color','blue');} else{$('#page08_con70').css('color','red');}
if($('#page08_con71').text().trim() == 'L' | $('#page08_con71').text().trim() == 'l'){$('#page08_con71').css('color','blue');} else{$('#page08_con71').css('color','red');}
if($('#page08_con72').text().trim() == 'O' | $('#page08_con72').text().trim() == 'o'){$('#page08_con72').css('color','blue');} else{$('#page08_con72').css('color','red');}
if($('#page08_con73').text().trim() == 'S' | $('#page08_con73').text().trim() == 's'){$('#page08_con73').css('color','blue');} else{$('#page08_con73').css('color','red');}
if($('#page08_con74').text().trim() == 'S' | $('#page08_con74').text().trim() == 's'){$('#page08_con74').css('color','blue');} else{$('#page08_con74').css('color','red');}		
if($('#page08_con75').text().trim() == 'E' | $('#page08_con75').text().trim() == 'e'){$('#page08_con75').css('color','blue');} else{$('#page08_con75').css('color','red');}
if($('#page08_con76').text().trim() == 'U' | $('#page08_con76').text().trim() == 'u'){$('#page08_con76').css('color','blue');} else{$('#page08_con76').css('color','red');}
if($('#page08_con77').text().trim() == 'M' | $('#page08_con77').text().trim() == 'm'){$('#page08_con77').css('color','blue');} else{$('#page08_con77').css('color','red');}


if(($('#page08_con1').text().trim() == 'C' | $('#page08_con1').text().trim() == 'c') && ($('#page08_con2').text().trim() == 'H' | $('#page08_con2').text().trim() == 'h') && ($('#page08_con3').text().trim() == 'R' | $('#page08_con3').text().trim() == 'r') && ($('#page08_con4').text().trim() == 'I' | $('#page08_con4').text().trim() == 'i') && ($('#page08_con5').text().trim() == 'S' | $('#page08_con5').text().trim() == 's') && ($('#page08_con6').text().trim() == 'T' | $('#page08_con6').text().trim() == 't') && ($('#page08_con7').text().trim() == 'T' | $('#page08_con7').text().trim() == 't') && ($('#page08_con8').text().trim() == 'H' | $('#page08_con8').text().trim() == 'h') && ($('#page08_con9').text().trim() == 'E' | $('#page08_con9').text().trim() == 'e') && ($('#page08_con10').text().trim() == 'R' | $('#page08_con10').text().trim() == 'r') && ($('#page08_con11').text().trim() == 'E' | $('#page08_con11').text().trim() == 'e') && ($('#page08_con12').text().trim() == 'D' | $('#page08_con12').text().trim() == 'd') && ($('#page08_con13').text().trim() == 'E' | $('#page08_con13').text().trim() == 'e') && ($('#page08_con14').text().trim() == 'E' | $('#page08_con14').text().trim() == 'e') && ($('#page08_con15').text().trim() == 'M' | $('#page08_con15').text().trim() == 'm') && ($('#page08_con16').text().trim() == 'E' | $('#page08_con16').text().trim() == 'e') && ($('#page08_con17').text().trim() == 'R' | $('#page08_con17').text().trim() == 'r') && ($('#page08_con18').text().trim() == 'G' | $('#page08_con18').text().trim() == 'g') && ($('#page08_con19').text().trim() == 'R' | $('#page08_con19').text().trim() == 'r') && ($('#page08_con20').text().trim() == 'E' | $('#page08_con20').text().trim() == 'e') && ($('#page08_con21').text().trim() == 'A' | $('#page08_con21').text().trim() == 'a') && ($('#page08_con22').text().trim() == 'T' | $('#page08_con22').text().trim() == 't') && ($('#page08_con23').text().trim() == 'W' | $('#page08_con23').text().trim() == 'w') && ($('#page08_con24').text().trim() == 'A' | $('#page08_con24').text().trim() == 'a') && ($('#page08_con25').text().trim() == 'L' | $('#page08_con25').text().trim() == 'l') && ($('#page08_con26').text().trim() == 'L' | $('#page08_con26').text().trim() == 'l') && ($('#page08_con27').text().trim() == 'O' | $('#page08_con27').text().trim() == 'o') && ($('#page08_con28').text().trim() == 'F' | $('#page08_con28').text().trim() == 'f') && ($('#page08_con29').text().trim() == 'C' | $('#page08_con29').text().trim() == 'c') && ($('#page08_con30').text().trim() == 'H' | $('#page08_con30').text().trim() == 'h') && ($('#page08_con31').text().trim() == 'I' | $('#page08_con31').text().trim() == 'i') && ($('#page08_con32').text().trim() == 'N' | $('#page08_con32').text().trim() == 'n') && ($('#page08_con33').text().trim() == 'A' | $('#page08_con33').text().trim() == 'a') && ($('#page08_con34').text().trim() == 'M' | $('#page08_con34').text().trim() == 'm') && ($('#page08_con35').text().trim() == 'A' | $('#page08_con35').text().trim() == 'a') && ($('#page08_con36').text().trim() == 'C' | $('#page08_con36').text().trim() == 'c') && ($('#page08_con37').text().trim() == 'H' | $('#page08_con37').text().trim() == 'h') && ($('#page08_con38').text().trim() == 'U' | $('#page08_con38').text().trim() == 'u') && ($('#page08_con39').text().trim() == 'P' | $('#page08_con39').text().trim() == 'p') && ($('#page08_con40').text().trim() == 'I' | $('#page08_con40').text().trim() == 'i') && ($('#page08_con41').text().trim() == 'C' | $('#page08_con41').text().trim() == 'c') && ($('#page08_con42').text().trim() == 'C' | $('#page08_con42').text().trim() == 'c') && ($('#page08_con43').text().trim() == 'H' | $('#page08_con43').text().trim() == 'h') && ($('#page08_con44').text().trim() == 'U' | $('#page08_con44').text().trim() == 'u') && ($('#page08_con45').text().trim() == 'P' | $('#page08_con45').text().trim() == 'p') && ($('#page08_con46').text().trim() == 'E' | $('#page08_con46').text().trim() == 'e') && ($('#page08_con47').text().trim() == 'T' | $('#page08_con47').text().trim() == 't') && ($('#page08_con48').text().trim() == 'R' | $('#page08_con48').text().trim() == 'r') && ($('#page08_con49').text().trim() == 'A' | $('#page08_con49').text().trim() == 'a') && ($('#page08_con50').text().trim() == 'C' | $('#page08_con50').text().trim() == 'c') && ($('#page08_con51').text().trim() == 'H' | $('#page08_con51').text().trim() == 'h') && ($('#page08_con52').text().trim() == 'I' | $('#page08_con52').text().trim() == 'i') && ($('#page08_con53').text().trim() == 'C' | $('#page08_con53').text().trim() == 'c') && ($('#page08_con54').text().trim() == 'H' | $('#page08_con54').text().trim() == 'h') && ($('#page08_con55').text().trim() == 'E' | $('#page08_con55').text().trim() == 'e') && ($('#page08_con56').text().trim() == 'N' | $('#page08_con56').text().trim() == 'n') && ($('#page08_con57').text().trim() == 'I' | $('#page08_con57').text().trim() == 'i') && ($('#page08_con58').text().trim() == 'T' | $('#page08_con58').text().trim() == 't') && ($('#page08_con59').text().trim() == 'Z' | $('#page08_con59').text().trim() == 'z') && ($('#page08_con60').text().trim() == 'A' | $('#page08_con60').text().trim() == 'a') && ($('#page08_con61').text().trim() == 'T' | $('#page08_con61').text().trim() == 't') && ($('#page08_con62').text().trim() == 'A' | $('#page08_con62').text().trim() == 'a') && ($('#page08_con63').text().trim() == 'J' | $('#page08_con63').text().trim() == 'j') && ($('#page08_con64').text().trim() == 'M' | $('#page08_con64').text().trim() == 'm') && ($('#page08_con65').text().trim() == 'A' | $('#page08_con65').text().trim() == 'a') && ($('#page08_con66').text().trim() == 'H' | $('#page08_con66').text().trim() == 'h') && ($('#page08_con67').text().trim() == 'A' | $('#page08_con67').text().trim() == 'a') && ($('#page08_con68').text().trim() == 'L' | $('#page08_con68').text().trim() == 'l') && ($('#page08_con69').text().trim() == 'C' | $('#page08_con69').text().trim() == 'c') && ($('#page08_con70').text().trim() == 'O' | $('#page08_con70').text().trim() == 'o') && ($('#page08_con71').text().trim() == 'L' | $('#page08_con71').text().trim() == 'l') && ($('#page08_con72').text().trim() == 'O' | $('#page08_con72').text().trim() == 'o') && ($('#page08_con73').text().trim() == 'S' | $('#page08_con73').text().trim() == 's') && ($('#page08_con74').text().trim() == 'S' | $('#page08_con74').text().trim() == 's') && ($('#page08_con75').text().trim() == 'E' | $('#page08_con75').text().trim() == 'e') && ($('#page08_con76').text().trim() == 'U' | $('#page08_con76').text().trim() == 'u') && ($('#page08_con77').text().trim() == 'M' | $('#page08_con77').text().trim() == 'm'))
			{
				$(this).addClass('showanspg11_2answered');		
				$('#pops').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 5750
	     	});
			$('.p08').attr('contenteditable', false); 
			$('.p08').css('color', 'blue'); 
			$('#submit02').off('click');
		}
		else
		{
			$('#submit02').on('click');
			$('#popst').bPopup({
            	onOpen: function() {  }, 
            	onClose: function() {  },
            	autoClose: 4000
        	});
		}
	});



});
