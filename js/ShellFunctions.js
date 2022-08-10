// JavaScript source code

//page view code start
var noOfPage = 2;

//localStorage.setItem("noOfPage", "2");
var showFirstOrSecond = 1;
var FirstPageID = "page0";
var LastPageID = "page3";
var urlList1 = [{ "key": "Cover", "url": "Chapter_1/index.html" }, { "key": "Chapter_1", "url": "Chapter_2/index.html" }, { "key": "Chapter_2", "url": "Chapter_3/index.html" }, { "key": "Chapter_3", "url": "Chapter_4/index.html" }, { "key": "Chapter_4", "url": "Chapter_5/index.html" }, { "key": "Chapter_5", "url": "Chapter_6/index.html" }, { "key": "Chapter_6", "url": "Chapter_7/index.html" }, { "key": "Chapter_7", "url": "Chapter_8/index.html" }, { "key": "Chapter_8", "url": "Chapter_9/index.html" }, { "key": "Chapter_9", "url": "Chapter_10/index.html" }, { "key": "Chapter_10", "url": "Chapter_11/index.html" }, { "key": "Chapter_11", "url": "Chapter_12/index.html" }, { "key": "Chapter_12", "url": "Chapter_13/index.html" }, { "key": "Chapter_13", "url": "Chapter_14/index.html" }, { "key": "Chapter_14", "url": "Chapter_15/index.html" }, { "key": "Chapter_15", "url": "Chapter_16/index.html" }, { "key": "Chapter_16", "url": "Chapter_17/index.html" }, { "key": "Chapter_17", "url": "Chapter_18/index.html" }, { "key": "Chapter_18", "url": "Chapter_19/index.html" }, { "key": "Chapter_19", "url": "Chapter_20/index.html" }, { "key": "Chapter_20", "url": "Chapter_21/index.html" }, { "key": "Chapter_21", "url": "Chapter_22/index.html" }, { "key": "Chapter_22", "url": "Activity/index.html" }, { "key": "Activity", "url": "chapter23/index.html" }, { "key": "chapter23", "url": "chapter24/index.html" }, { "key": "chapter24", "url": "Testpapers/index.html" }];
//var urlList1 = [];
var urlList2 = [{ "key": "Chapter_1", "url": "Cover/index.html#page2" }, { "key": "Chapter_2", "url": "Chapter_1/index.html#page1" }, { "key": "Chapter_3", "url": "Chapter_2/index.html#page0" }, { "key": "Chapter_4", "url": "Chapter_3/index.html#page1" }, { "key": "Chapter_5", "url": "Chapter_4/index.html#page0" }, { "key": "Chapter_6", "url": "Chapter_5/index.html#page0" }, { "key": "Chapter_7", "url": "Chapter_6/index.html#page0" }, { "key": "Chapter_8", "url": "Chapter_7/index.html#page1" }, { "key": "Chapter_9", "url": "Chapter_8/index.html#page0" }, { "key": "Chapter_10", "url": "Chapter_9/index.html#page1" }, { "key": "Chapter_11", "url": "Chapter_10/index.html#page1" }, { "key": "Chapter_12", "url": "Chapter_11/index.html#page1" }, { "key": "Chapter_13", "url": "Chapter_12/index.html#page0" }, { "key": "Chapter_14", "url": "Chapter_13/index.html#page1" }, { "key": "Chapter_15", "url": "Chapter_14/index.html#page0" }, { "key": "Chapter_16", "url": "Chapter_15/index.html#page1" }, { "key": "Chapter_17", "url": "Chapter_16/index.html#page1" }, { "key": "Chapter_18", "url": "Chapter_17/index.html#page1" }, { "key": "Chapter_19", "url": "Chapter_18/index.html#page0" }, { "key": "Chapter_20", "url": "Chapter_19/index.html#page0" }, { "key": "Chapter_21", "url": "Chapter_20/index.html#page0" }, { "key": "Chapter_22", "url": "Chapter_21/index.html#page1" }, { "key": "Activity", "url": "Chapter_22/index.html#page0" }, { "key": "chapter23", "url": "Activity/index.html#page1" }, { "key": "chapter24", "url": "chapter23/index.html#page1" }, { "key": "Testpapers", "url": "chapter24/index.html" }];

//var urlList2 = [];
var CoverPageFolderName = "Cover";
var LastPageFolderName = "Testpapers";
var firsttimepageswitch = false;
function FindFolderName() {
    var hashUrl = window.location.pathname.split('/');
    var folderName = hashUrl[hashUrl.length - 2];
    // alert(folderName);
    return folderName;
}

function RedirectionToShell(urlList) {
    var flag = false;
    var folderName = FindFolderName();
    for (var ii = 0; ii < urlList.length; ii++) {
        if (folderName == urlList[ii].key) {
            var mainurl = window.location.pathname;
            mainurl = mainurl.substring(0, mainurl.indexOf(folderName));
            flag = true;
            window.location.href = (mainurl + urlList[ii].url);
        }
    }
}
//change view function start
function ChangePageViewMode() {
    var MainPageID = "";
    var allpages = document.getElementsByClassName('bb-item');
    for (var i = 0; i < allpages.length; i++) {
        if (allpages[i].style.display == 'block') {
            MainPageID = allpages[i].id;
            break;
        }
    }

    if (MainPageID == "") {
        MainPageID = FirstPageID;
    }
    var blockborder = document.getElementById('blockborder');

    noOfPage = noOfPage == 1 ? 2 : 1;
    //	var opac = $('.stats a').css('opacity');
    if (noOfPage == 1) {
        $('.stats a').css('opacity', '1');
    }
    else {
        $('.stats a').css('opacity', '0');
    }


    if (noOfPage == 2) {
        blockborder.style.width = 'auto';
        blockborder.style.marginLeft = '0px';
        $('#' + MainPageID + ' .first').show();
        if ($('#' + MainPageID + ' .second').length != null) {
            $('#' + MainPageID + ' .second').show();
            $('#' + MainPageID + ' .second .secondsub').css('-webkit-transform', 'translate(612.00px,0.00px)');
            $('#' + MainPageID + ' .second .secondsub').css('-ms-transform', 'translate(612.00px,0.00px)');
            $('#' + MainPageID + ' .second .secondsub').css('transform', 'translate(612.00px,0.00px)');
        }

        $('#' + MainPageID + ' .first').css('margin-left', '0px');
        $('#' + MainPageID + ' .second').css('margin-left', '0px');


        var leftpos = '';
        var remarklist = document.getElementsByClassName('removeMark');
        // var remarklist = $('#' + MainPageID + ' .removeMark');

        for (var i = 0; i < remarklist.length; i++) {
            var mp = remarklist[i].name.split('|');
            if (mp[0] == 1 && mp[1] == 2) {
                leftpos = remarklist[i].style.left;
                leftpos = leftpos.substr(0, leftpos.length - 2);
                remarklist[i].style.left = (parseInt(leftpos) + 662) + 'px';
            }
            else if (mp[0] == 2 && mp[1] == 2) {
                leftpos = remarklist[i].style.left;
                leftpos = leftpos.substr(0, leftpos.length - 2);
                remarklist[i].style.left = (parseInt(leftpos) + 662) + 'px';
            }
        }
    }
    else {

        blockborder.style.width = '49.1%';
        //blockborder.style.marginLeft = '23%';
        blockborder.style.margin = '0 auto';
        if (showFirstOrSecond == 1) {

            if (($('#' + MainPageID + ' .second').prev().hasClass("first"))) {
                $('#' + MainPageID + ' .first').show();
                $('#' + MainPageID + ' .second').hide();
            }
            else {
                showFirstOrSecond = 2;
                $('#' + MainPageID + ' .second').show();
                $('#' + MainPageID + ' .second .secondsub').css('-webkit-transform', '');
                $('#' + MainPageID + ' .second .secondsub').css('-ms-transform', '');
                $('#' + MainPageID + ' .second .secondsub').css('transform', '');
                $('#' + MainPageID + ' .second').css('margin-left', '-595px');
                $('#' + MainPageID + ' .first').hide();
            }
        }
        else {

            $('#' + MainPageID + ' .second').show();
            $('#' + MainPageID + ' .second .secondsub').css('-webkit-transform', '');
            $('#' + MainPageID + ' .second .secondsub').css('-ms-transform', '');
            $('#' + MainPageID + ' .second .secondsub').css('transform', '');
            $('#' + MainPageID + ' .second').css('margin-left', '-595px');
            $('#' + MainPageID + ' .first').hide();
        }

        var leftpos = '';
        var remarklist = document.getElementsByClassName('removeMark');
        // var remarklist = $('#' + MainPageID + ' .removeMark');
        for (var i = 0; i < remarklist.length; i++) {
            var mp = remarklist[i].name.split('|');
            if (mp[0] == 2 && mp[1] == 2) {
                leftpos = remarklist[i].style.left;
                leftpos = leftpos.substr(0, leftpos.length - 2);
                remarklist[i].style.left = (parseInt(leftpos) - 662) + 'px';
            }
            else if (mp[0] == 1 && mp[1] == 2) {
                leftpos = remarklist[i].style.left;
                leftpos = leftpos.substr(0, leftpos.length - 2);
                remarklist[i].style.left = (parseInt(leftpos) - 662) + 'px';
            }
        }
    }

    if (MainPageID == FirstPageID && FindFolderName() == CoverPageFolderName) {
        $('#bb-nav-prev').hide();
    }
}
//change view function end
function chnageviewfirstpage() {
    if (FindFolderName() == CoverPageFolderName) {
        ChangePageViewMode();
    }
}

//page navigation function start
function PageNavigation(nextorpre) {
    var MainPageID = "";
    var allpages = document.getElementsByClassName('bb-item');
    for (var i = 0; i < allpages.length; i++) {
        if (allpages[i].style.display == 'block') {
            MainPageID = allpages[i].id;
            break;
        }
    }

    if (FirstPageID == MainPageID && firsttimepageswitch == false && FindFolderName() == CoverPageFolderName) {
        firsttimepageswitch = true;
        noOfPage = 1;
        ChangePageViewMode();
    }

    if (showFirstOrSecond == 1 && noOfPage == 1) {
        showFirstOrSecond = 2;
        //var blockborder = document.getElementById('blockborder');
        //blockborder.style.width = '49%';
        //blockborder.style.marginLeft = '23%';

        if (nextorpre == 'prev') {
            if ($('#' + MainPageID).prev().length != null && $('#' + MainPageID).prev().hasClass('bb-item')) {
                $('#' + MainPageID).hide();

                MainPageID = $('#' + MainPageID).prev().attr('id');
                $('#' + MainPageID).fadeIn();

                $('#' + MainPageID + ' .first').hide();
                $('#' + MainPageID + ' .second').fadeIn();

                $('#' + MainPageID + ' .second .secondsub').css('-webkit-transform', '');
                $('#' + MainPageID + ' .second .secondsub').css('-ms-transform', '');
                $('#' + MainPageID + ' .second .secondsub').css('transform', '');

                if (!($('#' + MainPageID).prev().length != null && $('#' + MainPageID).prev().hasClass('bb-item'))) {
                    if (FindFolderName() == CoverPageFolderName) {
                        $('#bb-nav-prev').hide();
                        //firsttimepageswitch = true;
                        //noOfPage = 1;
                        //ChangePageViewMode();
                    }
                }
            }
            else {
                RedirectionToShell(urlList2);
            }

        }
        else {

            if (!($('#' + MainPageID + ' .first').next().hasClass("second"))) {
                //RedirectionToShell(urlList1);	
            }
            else {

                if (!($('#' + MainPageID).next().length != null && $('#' + MainPageID).next().hasClass('bb-item'))) {
                    if (FindFolderName() == LastPageFolderName) {
                        $('#bb-nav-next').hide();
                    }
                }

                $('#' + MainPageID + ' .first').hide();
                $('#' + MainPageID + ' .second').fadeIn();

                $('#' + MainPageID + ' .second .secondsub').css('-webkit-transform', '');
                $('#' + MainPageID + ' .second .secondsub').css('-ms-transform', '');
                $('#' + MainPageID + ' .second .secondsub').css('transform', '');
            }
        }
    }
    else if (showFirstOrSecond == 2 && noOfPage == 1) {
        showFirstOrSecond = 1;

        //var blockborder = document.getElementById('blockborder');
        //blockborder.style.width = '50%';
        //blockborder.style.marginLeft = '23%';

        if (nextorpre == 'next') {
            if ($('#' + MainPageID).next().length != null && $('#' + MainPageID).next().hasClass('bb-item')) {
                $('#' + MainPageID).hide();
                MainPageID = $('#' + MainPageID).next().attr('id');
                $('#' + MainPageID).show();

                if (($('#' + MainPageID + ' .second').prev().hasClass("first"))) {
                    $('#' + MainPageID + ' .first').fadeIn();
                    $('#' + MainPageID + ' .second').hide();
                }
                else {
                    $('#' + MainPageID + ' .second').fadeIn();
                    $('#' + MainPageID + ' .first').hide();
                }

                if (!($('#' + MainPageID).next().length != null && $('#' + MainPageID).next().hasClass('bb-item'))) {
                    if (FindFolderName() == LastPageFolderName) {
                        $('#bb-nav-next').hide();
                    }
                }

            }
            else {
                RedirectionToShell(urlList1);
            }
        }
        else {

            if (!($('#' + MainPageID + ' .second').prev().hasClass("first"))) {
                $('#' + MainPageID + ' .second').fadeIn();
                $('#' + MainPageID + ' .first').hide();
                //RedirectionToShell(urlList2);
            }
            else {
                if (!($('#' + MainPageID).prev().length != null && $('#' + MainPageID).prev().hasClass('bb-item'))) {
                    if (FindFolderName() == CoverPageFolderName) {
                        $('#bb-nav-prev').hide();
                        //firsttimepageswitch = true;
                        //noOfPage = 1;
                        //ChangePageViewMode();
                    }
                }

                $('#' + MainPageID + ' .first').fadeIn();
                $('#' + MainPageID + ' .second').hide();
            }

        }
    }
    else if (noOfPage == 2) {
        showFirstOrSecond = 1;

        $('#' + MainPageID).fadeOut();

        if (nextorpre == 'next') {
            if ($('#' + MainPageID).next().hasClass('bb-item')) {
                MainPageID = $('#' + MainPageID).next().attr('id');

                if (!$('#' + MainPageID).next().hasClass('bb-item')) {
                    if (FindFolderName() == LastPageFolderName) {
                        $('#bb-nav-next').hide();
                    }
                }
            }
            else {
                RedirectionToShell(urlList1);
            }
        }
        else {
            if ($('#' + MainPageID).prev().hasClass('bb-item')) {
                MainPageID = $('#' + MainPageID).prev().attr('id');

                if (!$('#' + MainPageID).prev().hasClass('bb-item')) {
                    if (FindFolderName() == CoverPageFolderName) {
                        $('#bb-nav-prev').hide();
                        // showFirstOrSecond = 2;
                        // ChangePageViewMode();
                    }
                }

            }
            else {

                RedirectionToShell(urlList2);
            }

        }
        $('#' + MainPageID).fadeIn();
        $('#' + MainPageID + ' .second').show();
        $('#' + MainPageID + ' .first').show();
        $('#' + MainPageID + ' .second .secondsub').css('-webkit-transform', 'translate(612.00px,0.00px)');
        $('#' + MainPageID + ' .second .secondsub').css('-ms-transform', 'translate(612.00px,0.00px)');
        $('#' + MainPageID + ' .second .secondsub').css('transform', 'translate(612.00px,0.00px)');
        // BindingJQueryEvent();
    }

    if (($('#' + MainPageID).prev().length != null && $('#' + MainPageID).prev().hasClass('bb-item')) || (noOfPage == 1 && showFirstOrSecond == 2 && $('#' + MainPageID + ' .second').prev().hasClass('first'))) {
        $('#bb-nav-prev').show();
    }


    if (($('#' + MainPageID).next().length != null && $('#' + MainPageID).next().hasClass('bb-item')) || (noOfPage == 1 && showFirstOrSecond == 1 && $('#' + MainPageID + ' .first').next().hasClass('second'))) {

        $('#bb-nav-next').show();
    }

}
//page navigation function end
//page view code end

//highlight code start

var x = 0;
var y = 0;
var highlight = false;
var highlightdraw = false;
var markedpage = 0;
function RemoveHighlighter(nodeid) {
    $(nodeid).hide();
}

function highlightStart() {
    $('body article.container_12').css({ zoom: 1, '-moz-transform': 'scale(' + 1 + ')' });
    highlight = true;
    $('.write a').css("opacity", "1");
    $('.book-wrapper').addClass("brush");
    $('body').addClass("selection");

}

function mousemoveOnContainer(e) {
    if (highlight && highlightdraw) {
        var node = document.getElementById('high' + x + '_' + y);
        node.style.width = (e.pageX - x) + 'px';
        var height = e.pageY - y;
        node.style.height = height > 12 ? height + 'px' : '12px';

    }
}

function mousedownOnContainer(e) {
    var allpages = document.getElementsByClassName('bb-item');
    for (var i = 0; i < allpages.length; i++) {
        if (allpages[i].style.display == 'block') {
            MainPageIDHigh = allpages[i].id;
            break;
        }
    }

    if (highlight && markedpage != 0) {
        highlightdraw = true;
        x = e.pageX;
        // x = e.clientX;
        y = e.pageY;
        // y = e.clientY;

        console.log("x " + x);
        console.log("y " + y);

        var Childnodeslist = document.getElementById(MainPageIDHigh).childNodes;
        if (markedpage == 1) {
            for (var i = 0; i < Childnodeslist.length; i++) {
                if (Childnodeslist[i].nodeType == 1) {
                    if (Childnodeslist[i].classList.contains('first')) {
                        var Container = Childnodeslist[i];
                        break;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < Childnodeslist.length; i++) {
                if (Childnodeslist[i].nodeType == 1) {
                    if (Childnodeslist[i].classList.contains('second')) {
                        var Container = Childnodeslist[i];
                        break;
                    }
                }
            }
        }
        var node = document.createElement("div");
        node.className = 'removeMark';
        node.id = 'high' + x + '_' + y;
        node.name = noOfPage + '|' + markedpage;

        //  var leftmargin = $("#blockborder").position().left + 20;

        var offset = $("#blockborder").offset();
        var leftmargin = offset.left;

        console.log("leftmargin " + leftmargin);
        if (noOfPage == 2) {
            node.style.left = (x - leftmargin - 15) + 'px';
        }
        else {

            node.style.left = (x - leftmargin - 15) + 'px';

        }

        node.style.top = (y - 156) + 'px';
        node.style.position = "absolute";
        Container.appendChild(node);

        /*var nodeimg = document.createElement("img");
         nodeimg.src = '../img/close.png';
        nodeimg.className = 'rmv-highlight';		*/

        $('#' + node.id).append("<img src='../img/closegrey.png' class='rmv-highlight' onclick='RemoveHighlighter(" + node.id + ")' />");
    }
}


function mouseupContainer() {
    if (highlight && highlightdraw) {
        //var node = document.getElementById('high' + x + '_' + y);
        //var hl = { BookName: $rootScope.BookName, PageUrl: $rootScope.currentUrl, PageID: markedPage, Contant: node.outerHTML };
        //DataService.SetHighlight(hl).then(function (d) {
        //    console.log('Highlight success');
        //}, function (e) { console.log(e); });
        x = 0;
        y = 0;
        highlight = false;
        highlightdraw = false;

        $('.write a').css("opacity", "0");
        $('.book-wrapper').removeClass("brush");
        $('body').removeClass("selection");


    }
}
function clickonCantainer(e) {

}
function SetMarkedPageOne() {
    markedpage = 1;
}
function SetMarkedPageSecond() {
    markedpage = 2;
}
//highlight code end


function checkbrowser() {

    var ExpiryDate = new Date("June 15, 2020 00:00:00");
    if (new Date() > ExpiryDate) {
        document.getElementById('Expiredmodel').style.display = "block";
    }

    else {
        var isChrome = !!window.chrome;

        var objAgent = navigator.userAgent;
        if (!isChrome) {
            document.getElementById('browsermodel').style.display = "block";
        }

        //else {


        //    if (window.screen.availHeight < 860 || window.screen.availWidth < 1600) {
        //        document.getElementById('screenresolumodel').style.display = "block";
        //    }
        //}
    }
}

//function ClosePopupSR() {
//    document.getElementById('screenresolumodel').style.display = "none";
//}
function printDiv(divName) {
    var leftpos = '';
    var remarklist = document.getElementsByClassName('removeMark');
    // var remarklist = $('#' + MainPageID + ' .removeMark');

    for (var i = 0; i < remarklist.length; i++) {
        var mp = remarklist[i].name.split('|');
        if (mp[0] == 1 && mp[1] == 2) {
            leftpos = remarklist[i].style.left;
            leftpos = leftpos.substr(0, leftpos.length - 2);
            remarklist[i].style.left = (parseInt(leftpos) + 662) + 'px';
        }
        else if (mp[0] == 2 && mp[1] == 2) {
            leftpos = remarklist[i].style.left;
            leftpos = leftpos.substr(0, leftpos.length - 2);
            remarklist[i].style.left = (parseInt(leftpos) + 662) + 'px';
        }
    }

    var MainPageID = "";
    var allpages = document.getElementsByClassName('bb-item');
    for (var i = 0; i < allpages.length; i++) {
        if (allpages[i].style.display == 'block') {
            MainPageID = allpages[i].id;
            break;
        }
    }

    if (noOfPage == 2) {
        $('.grid_10').css('width', '50%');
        $('.fullscreen1 .book-wrapper').css('height', '1590px');

        $('#' + MainPageID + ' .bb-custom-side').css('width', '100%');
        $('#' + MainPageID + ' .bb-custom-side').css('height', '51%');

        $('#' + MainPageID + ' .second .secondsub').css('position', 'relative');
        $('#' + MainPageID + ' .second .secondsub').css('-webkit-transform', '');
        $('#' + MainPageID + ' .second .secondsub').css('-ms-transform', '');
        $('#' + MainPageID + ' .second .secondsub').css('transform', '');
    }



    var htm = $("#et").html();
    $("#et").html("");
    $(".popup").html("");
    var printContents = document.getElementById("pt").innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    //location.reload();
    document.body.innerHTML = originalContents;
    $("#et").html(htm);
    location.reload();


};


//function SearchTextFunc() {

//    var str = document.getElementById('SearchText').value;
//    if (parseInt(navigator.appVersion) < 4) return;
//    var strFound;
//    if (window.find) {

//        // CODE FOR BROWSERS THAT SUPPORT window.find

//        strFound = self.find(str);
//        if (!strFound) {
//            strFound = self.find(str, 0, 1);
//            while (self.find(str, 0, 1)) continue;
//        }
//    }
//    else if (navigator.appName.indexOf("Microsoft") != -1) {

//        // EXPLORER-SPECIFIC CODE

//        if (TRange != null) {
//            TRange.collapse(false);
//            strFound = TRange.findText(str);
//            if (strFound) TRange.select();
//        }
//        if (TRange == null || strFound == 0) {
//            TRange = self.document.body.createTextRange();
//            strFound = TRange.findText(str);
//            if (strFound) TRange.select();

//        }
//    }
//    else if (navigator.appName == "Opera") {
//        alert("Opera browsers not supported, sorry...")
//        return;
//    }
//      if (!strFound) {
//        $("#tooltip").show();
//        setTimeout(function () {  $("#tooltip").hide(); }, 3000);
//    }
//	else{
//		 $("#tooltip").hide();
//	}
//	  event.preventDefault();
//    return;
//}


var SearchCount = 0;
jQuery.fn.highlight = function (pat) {

    function innerHighlight(node, pat) {
        var skip = 0;
        var Visiblemark = "visible";
        if (node.nodeType == 3) {
            var pos = node.data.toUpperCase().indexOf(pat);
            if (pos >= 0) {
                var middlebit = node.splitText(pos);

                if (middlebit.parentNode.id != null && middlebit.parentNode.id != undefined && middlebit.parentNode.id != "") {
                    if ($('#' + middlebit.parentNode.id).css('visibility') == "hidden") {
                        Visiblemark = "hidden";
                    }
                }
                else {
                    if (middlebit.parentNode.parentNode.id != null && middlebit.parentNode.parentNode.id != undefined && middlebit.parentNode.parentNode.id != "") {
                        if ($('#' + middlebit.parentNode.parentNode.id + ' span').css('visibility') == "hidden") {
                            Visiblemark = "hidden";
                        }
                    }
                }

                if (Visiblemark == "visible") {
                    var spannode = document.createElement('span');
                    spannode.className = 'highlightsearch';
                    var endbit = middlebit.splitText(pat.length);
                    var middleclone = middlebit.cloneNode(true);
                    spannode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spannode, middlebit);
                    SearchCount = SearchCount + 1;
                }
                skip = 1;

            }
        }
        else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
            for (var i = 0; i < node.childNodes.length; ++i) {
                i += innerHighlight(node.childNodes[i], pat);

            }
        }

        return skip;
    }
    return this.each(function () {

        innerHighlight(this, pat.toUpperCase());
    });
};

jQuery.fn.removeHighlight = function () {
    function newNormalize(node) {
        for (var i = 0, children = node.childNodes, nodeCount = children.length; i < nodeCount; i++) {
            var child = children[i];
            if (child.nodeType == 1) {
                newNormalize(child);
                continue;
            }
            if (child.nodeType != 3) { continue; }
            var next = child.nextSibling;
            if (next == null || next.nodeType != 3) { continue; }
            var combined_text = child.nodeValue + next.nodeValue;
            new_node = node.ownerDocument.createTextNode(combined_text);
            node.insertBefore(new_node, child);
            node.removeChild(child);
            node.removeChild(next);
            i--;
            nodeCount--;
        }
    }

    return this.find("span.highlightsearch").each(function () {
        var thisParent = this.parentNode;
        thisParent.replaceChild(this.firstChild, this);
        newNormalize(thisParent);
    }).end();
};

function SearchTextFunc() {

    var MainPageID = "";
    var allpages = document.getElementsByClassName('bb-item');
    for (var i = 0; i < allpages.length; i++) {
        if (allpages[i].style.display == 'block') {
            MainPageID = allpages[i].id;
            break;
        }
    }
    // pull in the new value
    SearchCount = 0;
    var searchTerm = $('#SearchText').val();

    // remove any old highlighted terms
    $('#' + MainPageID).removeHighlight();

    // disable highlighting if empty
    if (searchTerm) {
        // highlight the new term
        $('#' + MainPageID).highlight(searchTerm);
    }

    $('#SearchCount').val(SearchCount);
    event.preventDefault();
}

function OpenLastPage() {
    //  $('.modal :input').autocomplete(false);
    var hashUrl = window.location.href.split('#');
    var divid = "";
    if (hashUrl.length > 1) {
        divid = hashUrl[hashUrl.length - 1];
        if (!(divid == "" || divid == null || divid == undefined)) {
            var listpagesid = [];
            //var MainPageID ="";
            var allpages = document.getElementsByClassName('bb-item');
            for (var i = 0; i < allpages.length; i++) {
                listpagesid.push(allpages[i].id);
                // if (allpages[i].style.display == 'block') {
                //MainPageID = allpages[i].id;
                //  break;
                //}
            }
            //  if (MainPageID == "") {
            //MainPageID = FirstPageID;
            //}

            setTimeout(function () {
                // $('#' + MainPageID).hide();
                for (var k = 0; k < listpagesid.length; k++) {
                    $('#' + listpagesid[k]).hide();
                }
                $('#' + divid).show();
            }, 200);
        }
        else {
            chnageviewfirstpage();
        }
    }
    else {
        chnageviewfirstpage();
    }
}
OpenLastPage();
checkbrowser();
