// JavaScript source code
function DragandDropFunc(locatedboxlist, dropableboxlist) {
    for (i = 0; i < locatedboxlist.length; i++) {
        $('#' + locatedboxlist[i] + ' span').css('visibility', 'visible');
        $('#' + locatedboxlist[i] + ' span').css('color', '#0000ff');
      
    }

    for (j = 0; j < dropableboxlist.length; j++) {
        $('#'+dropableboxlist[j]).css('visibility', 'hidden');
    }

    $('.highlightsearch').removeClass('highlightsearch');
}


function InputFieldFunc(listjson) {
    for (var i = 0; i < listjson.length; i++) {
        $('#' + listjson[i].ID).val(listjson[i].Value);
        $('#' + listjson[i].ID).css('color', '#0000ff');
        document.getElementById(listjson[i].ID).disabled = true;
    }
}


function MultiTickInputOptionFunc(IDOption) {
    for (var i = 0; i < IDOption.length; i++) {
        for (var j = 0; j < IDOption[i].OList.length; j++) {
            document.getElementById(IDOption[i].OList[j]).disabled = true;
          
            if (IDOption[i].OList[j] == IDOption[i].Selected) {
                $('#' + IDOption[i].OList[j]).attr('checked', true);
                $('#' + IDOption[i].ID).val($('#' + IDOption[i].Selected).val());
                $('#' + IDOption[i].ID).css('color', '#0000ff');
                $('#' + IDOption[i].OList[j]).next().removeClass('hide');
            }
            else {
                $('#' + IDOption[i].OList[j]).attr('checked', false);
            }
        }
    }
}

function MCQSFunction(IDOption) {

    for (var i = 0; i < IDOption.length; i++) {
        for (var j = 0; j < IDOption[i].OList.length; j++) {
            
            if (IDOption[i].OList[j] == IDOption[i].COID) {
                document.getElementById(IDOption[i].OList[j]).checked = true;
                document.getElementById(IDOption[i].OList[j]).disabled = true;
               // $('#' + IDOption[i].OList[j]).attr('checked', true);
            }
            else {
               // $('#' + IDOption[i].OList[j]).attr('checked', false);
                document.getElementById(IDOption[i].OList[j]).checked = false;

                document.getElementById(IDOption[i].OList[j]).disabled = true;
            }
        }
    }
}

function ChooseOneOption(IDOption) {
    for (var i = 0; i < IDOption.length; i++) {
        for (var j = 0; j < IDOption[i].AllID.length; j++) {

            if (IDOption[i].AllID[j] == IDOption[i].Value) {
                //$('#' + IDOption[i].AllID[j]).attr('checked', true);
                document.getElementById(IDOption[i].AllID[j]).checked = true;
                document.getElementById(IDOption[i].AllID[j]).disabled = true;
            }
            else {
                //  $('#' + IDOption[i].AllID[j]).attr('checked', false);
                document.getElementById(IDOption[i].AllID[j]).checked = false;
                document.getElementById(IDOption[i].AllID[j]).disabled = true;
            }
        }
    }
}



function MatchTheFollowing(ImageID) {
    $('#' + ImageID).css('display', 'block');
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        lines[i].style.display = "none";
    }
}


function CrossWordSolve(ItemList) {
    for (var i = 0; i < ItemList.length; i++) {
        for (var j = 0; j < ItemList[i].IDList.length; j++) {
            $('#' + ItemList[i].IDList[j]).val(ItemList[i].Alpha);
            $('#' + ItemList[i].IDList[j]).css("color", "#0000ff");
            document.getElementById(ItemList[i].IDList[j]).disabled = true;
        }
    }
}

function CheckBoxSelection(ListAll, ListAns) {
    for (var i = 0; i < ListAll.length; i++) {
        document.getElementById(ListAll[i]).disabled = true;
        if (ListAns.includes(ListAll[i])) {
            document.getElementById(ListAll[i]).checked = true;
        }
        else {
            document.getElementById(ListAll[i]).checked = false;
        }
    }
}


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}