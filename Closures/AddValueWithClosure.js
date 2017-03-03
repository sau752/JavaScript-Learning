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

    function addMultiple(numberOne) {

        function addFirst(numberTwo) {

            var OnePlusTwo = numberOne + numberTwo;

            function addSecond(numberThree) {
                alert(OnePlusTwo + numberThree);
            }

            return addSecond;
        }

        return addFirst;
    }

    $("#addMultipleNumberWithClosure").click(function() {
        addMultiple(2)(9)(41);
    });
});