$(function() {
    function outerFunction(firstNumber) {
        var constValue = 8;

        function innerFunction(secondNumber) {
            alert(firstNumber + secondNumber + constValue);
        }

        return innerFunction;
    }

    $("#addNumberWithClosure").click(function() {
        var callingFunction = outerFunction(3);
        callingFunction(5);
    });
});