var lineColor = "red";
var lineSize = 3;
var tempJsonObj =
{
	"Answers": [
        "l1-r2",
		"l2-r3",
		"l3-r5",
		"l4-r1",
		"l5-r4",
	]
}

var activateSecond = function()
{
	var givenAnswer = new Array();
	//$('*').off();
	$('.l_clsOption').bind('touchstart click', function(e)
	{
		e.preventDefault();
		$('.selected').not(this).removeClass('selected');
		$(this).addClass('selected');
		$bubble = $(this);
		window.sessionStorage["pointX"] = JSON.stringify($bubble.position());
		window.sessionStorage["tempID"] = $bubble.attr('id');
	});
	
	$('.r_clsOption').bind('touchstart click', function(e)
	{
		e.preventDefault();
		if($('.selected').length == 0) return false;
		$('.selected').removeClass('selected');
		if($('#reset_btn').hasClass('disabled'))
			$('#reset_btn').removeClass('disabled');
		//clearInt();
		$bubble = $(this);
		var tempID = window.sessionStorage['tempID'];
		var pointX = $.parseJSON(window.sessionStorage["pointX"]);
		var pointY = $bubble.position();
		var manageCenter = $('#l1').height()/2;
		var tempIDs = $bubble.attr('id');
		var a = $.grep(givenAnswer, function(n, i){return (n[0] == tempID || n[1] == tempIDs);});
		if(a.length)
			for(var i=0; i<a.length; i++)
				$('.' + a[i].join("-")).remove();
				
		givenAnswer.push([tempID, tempIDs]);
		
		var className = tempID + "-" + tempIDs;
		
		var divid = $(this).parent().attr('id');
		$('#' + divid).line(pointX.left+manageCenter, pointX.top+manageCenter, pointY.left+manageCenter, pointY.top+manageCenter, {color: lineColor, stroke: lineSize, class: className + " line"});
		
	
		
				/*$('.line').each(function(index, element) {
                    var ans = this.className.split(" ")[0];
					console.log(ans + ' ' + tempJsonObj.Answers);

					if($.inArray(ans, tempJsonObj.Answers) >= 0)
						$(this).css('border-color', 'red');
					else
						$(this).css('border-color', 'red').addClass('incorrect');
                });*/

		
		
		// if($('.r_clsOption').length==givenAnswer.length)
		// {

			$('#more-info1').unbind('click').removeClass('disabled').on('click', function()
			{
				$(this).addClass('disabled').unbind('click');
				$('.line').each(function(index, element) {
                    var ans = this.className.split(" ")[0];
					console.log(ans + ' ' + tempJsonObj.Answers);

					if($.inArray(ans, tempJsonObj.Answers) >= 0)
						$(this).css('border-color', 'red');
					else
						$(this).css('border-color', 'red').addClass('incorrect');
                });
				
				
				if(document.getElementsByClassName('incorrect').length != 0)
				{
					$('#showAns').unbind('click').removeClass('disabled').on('click', function()
					{
						$(this).unbind('click').addClass('disabled');
						$('.incorrect').remove();
						for(var i=0; i<tempJsonObj.Answers.length; i++)
						{
							var lineID = tempJsonObj.Answers[i];
							if($('.' + lineID).length != 1)
							{
								var points = lineID.split("-");
								var pointX = $('#'+points[0]).offset();
								var pointY = $('#'+points[1]).offset();
								$('body').line(pointX.left+manageCenter, pointX.top+manageCenter, pointY.left+manageCenter, pointY.top+manageCenter, {stroke: 3, class: "line"});
							}
						}
					});
				}
				else
				{
					$('#submitAns').addClass('disabled');
				}
			});
		// }
		return false;
	});


}
$(document).ready(function()
{
	activateSecond();
	$('#reset_btn').on('click', function(e)
	{
		location.href = document.URL;
	});
});





