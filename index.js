$('.b1').click(function(){
    var num1 = $('#value1').val();
    var num2 = $('#value2').val();
    var b = num1%num2;
    var a = Math.floor(num1/num2);
    console.log(a+b);
    if(num1>-1 && num2 != 0){
        $('#output').text('For given Input ' + num1 + ' and ' + num2 + ' ===>> ' + 'The Quetient is ' + a + ' and The Remainder is ' + b + '.');
    }
    else{
        alert('Please Check:---> Num1 must be a non negative integer and Num2 must not Equal to be 0');
    } 
});

$('.b2').click(function(){
    $('#output').text('Output');
});
