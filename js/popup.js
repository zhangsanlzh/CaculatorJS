
$(".dot").on('click', function () {    
    var text=$(".dot p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});

$(".zero").on('click', function () {    
    var text=$(".zero p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});
$(".one").on('click', function () {    
    var text=$(".one p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});
$(".two").on('click', function () {    
    var text=$(".two p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});
$(".three").on('click', function () {    
    var text=$(".three p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});
$(".four").on('click', function () {    
    var text=$(".four p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});
$(".five").on('click', function () {    
    var text=$(".five p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});
$(".six").on('click', function () {    
    var text=$(".six p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});
$(".seven").on('click', function () {    
    var text=$(".seven p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});
$(".eight").on('click', function () {    
    var text=$(".eight p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});
$(".nine").on('click', function () {    
    var text=$(".nine p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);
    
});

$(".plus").on('click', function () {    
    var text=$(".plus p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);

    //set the value of tempText,the input box.
    $("#tempText").val($("#tempText").val()+$("#hiddenText").val());

    //clear all text of hiddenText,the input box.
    $("#hiddenText").val(null);

    
});
$(".less").on('click', function () {    
    var text=$(".less p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);

    //set the value of tempText,the input box.
    $("#tempText").val($("#tempText").val()+$("#hiddenText").val());

    //clear all text of hiddenText,the input box.
    $("#hiddenText").val(null);

    
});
$(".multiply").on('click', function () {    
    var text=$(".multiply p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);

    //set the value of tempText,the input box.
    $("#tempText").val($("#tempText").val()+$("#hiddenText").val());

    //clear all text of hiddenText,the input box.
    $("#hiddenText").val(null);
    
});
$(".divide").on('click', function () {    
    var text=$(".divide p").text();    
    $(".result p").text(text);

    addValueToHiddenArea(text);

    //set the value of tempText,the input box.
    $("#tempText").val($("#tempText").val()+$("#hiddenText").val());

    //clear all text of hiddenText,the input box.
    $("#hiddenText").val(null);

    
});

$(".enter").on('click', function () {    
    var text=$(".enter p").text();    
    $(".result p").text(text);

    $("#tempText").val($('#tempText').val()+$('#hiddenText').val()+'=');

    addValueToHiddenArea(text);
    //do caculation when the enter key was pressed,
    //and then show the result to result Box.
    var result=caculate();
    $(".result p").text(result);


    
});

$(".clear").on('click', function () {    
    //clear all data in caculation.
    $(".result p").text(null);
    $("#hiddenText").val(null);
    $("#tempText").val(null); 

    //makd hiddenText,an input box to get focus.
    $('#hiddenText').focus();

    
});

function addValueToHiddenArea(value) {
    if (value=="Enter") {
        // document.getElementById('hiddenText').value+="=";
    }
    else
        document.getElementById('hiddenText').value+=value;
}

function caculate() {
    //get the expression to caculate.
    var str=document.getElementById('tempText').value;
    //to save the resule of caculation.
    var result;
    result=caculates(str);

    return result;
}

$('#hiddenText').on('keydown', function (e) {
    var resultText=e.key;

    var patt=new RegExp("([0-9]|[*+-/.enter])");
    if(patt.test(resultText))
    {
        $(".result p").text(resultText);
        
        switch (resultText) {
            case '1':
                $(".one").css("background-color","red");

                setTimeout(function() {
                    $(".one").css("background-color","white");            
                }, 150);
                break;

            case '2':
                $(".two").css("background-color","red");
                
                setTimeout(function() {
                    $(".two").css("background-color","white");            
                }, 150);
                break;

            case '3':
                $(".three").css("background-color","red");
                
                setTimeout(function() {
                    $(".three").css("background-color","white");            
                }, 150);
                break;
            case '4':
                $(".four").css("background-color","red");

                setTimeout(function() {
                    $(".four").css("background-color","white");            
                }, 150);
                break; 

             case '5':
                $(".five").css("background-color","red");

                setTimeout(function() {
                    $(".five").css("background-color","white");            
                }, 150);
                break;

            case '6':
                $(".six").css("background-color","red");

                setTimeout(function() {
                    $(".six").css("background-color","white");            
                }, 150);
                break;

            case '7':
                $(".seven").css("background-color","red");

                setTimeout(function() {
                    $(".seven").css("background-color","white");            
                }, 150);
                break;

            case '8':
                $(".eight").css("background-color","red");

                setTimeout(function() {
                    $(".eight").css("background-color","white");            
                }, 150);
                break; 

            case '9':
                $(".nine").css("background-color","red");

                setTimeout(function() {
                    $(".nine").css("background-color","white");            
                }, 150);
                break;

            case '0':
                $(".zero").css("background-color","red");

                setTimeout(function() {
                    $(".zero").css("background-color","white");            
                }, 150);
                break; 

            case '.':
                $(".dot").css("background-color","red");
                setTimeout(function() {
                    $(".dot").css("background-color","white");            
                }, 150);
                break; 

            case '+':
                $(".plus").css("background-color","red");
                setTimeout(function() {
                    $(".plus").css("background-color","white");            
                }, 150);

                break; 

            case '-':
                $(".less").css("background-color","red");
                setTimeout(function() {
                    $(".less").css("background-color","white");            
                }, 150);

                break; 

            case '*':
                $(".multiply").css("background-color","red");
                setTimeout(function() {
                    $(".multiply").css("background-color","white");            
                }, 150);

                break; 

            case '/':
                $(".divide").css("background-color","red");
                setTimeout(function() {
                    $(".divide").css("background-color","white");            
                }, 150);

                break; 

            case 'Enter':
                $(".enter").css("background-color","red");
                
                setTimeout(function() {
                    $(".enter").css("background-color","white");            
                }, 150);

                break; 
            
            default:
                break;
            }
        }

});
    


$('#hiddenText').on('keyup', function (e) {
    var resultText=e.key;

    var patt=new RegExp("([0-9]|[*+-/.enter])");
    if(patt.test(resultText))
    {
        $(".result p").text(resultText);
        
        switch (resultText) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '.':
                break;

            case '+':
                //set the value of tempText,the input box.
                $("#tempText").val($("#tempText").val()+$("#hiddenText").val());
                //clear all text of hiddenText,the input box.
                $("#hiddenText").val(null);
                break; 

            case '-':
                //set the value of tempText,the input box.
                $("#tempText").val($("#tempText").val()+$("#hiddenText").val());
                //clear all text of hiddenText,the input box.
                $("#hiddenText").val(null);
                break; 

            case '*':
                //set the value of tempText,the input box.
                $("#tempText").val($("#tempText").val()+$("#hiddenText").val());
                //clear all text of hiddenText,the input box.
                $("#hiddenText").val(null);
                break; 

            case '/':
                //set the value of tempText,the input box.
                $("#tempText").val($("#tempText").val()+$("#hiddenText").val());

                //clear all text of hiddenText,the input box.
                $("#hiddenText").val(null);
                
                break; 

            case 'Enter':
                $("#tempText").val($('#tempText').val()+$('#hiddenText').val()+'=');
                
                var text=$(".enter p").text();  
                addValueToHiddenArea(text);  

                $(".result p").text(caculate());
                break; 
            
            default:
                break;
            }
        }
        else
        {
            $("#hiddenText").val(null);
            $("#tempText").val(null);            
            $(".result p").text('Invalid');            
        }

});
