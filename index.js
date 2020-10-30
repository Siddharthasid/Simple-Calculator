function insertNumber(number){
    var existingNumber = $("#result").val();   /* j number ta  textfield aacha sata khuja naoa */
        
    $("#result").val(existingNumber + number);
}

function clearResult(){

    $("#result").val('');
}

function calculate(){

    var result = eval($("#result").val());

    $("#result").val(result);
}

 function deleteNumber(){

    var presentValue = $("#result").val(); 

    if(presentValue != ''){
        $("#result").val(presentValue.slice(0,-1));
    }
} 