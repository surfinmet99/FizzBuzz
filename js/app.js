$(document).ready(function(){
    $('#fizzy').click(function(){
        for (var count = 1; count < 101; count++) {
            if (count % 3 === 0 && count % 5 === 0) {
                $('.numbers').append("fizzbuzz"+"<br/>");
                console.log("fizzbuzz");
            } else if (count % 3 === 0) {
                $('.numbers').append("fizz"+"<br/>");
                console.log("fizz");
            } else if (count % 5 === 0) {
                $('.numbers').append("buzz"+"<br/>");
                console.log("buzz");
            } else {
                $('.numbers').append(count+"<br/>");
                console.log(count);
            }
        }
    });
});