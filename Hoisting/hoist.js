$(function () {

    $("#variableHoistFunction1").on("click", function () {

        alert(a);  //is not defined

    });

    $("#variableHoistFunction2").on("click", function () {
        var a;
        alert(a); //Undefined 
        a = 5;
    });

    $("#variableHoistFunction3").on("click", function () {
        alert(a);  //Undefined
        var a = 5;
    });

    $("#variableHoistFunction4").on("click", function () {
        var name = "Saurabh";
        (function () {
            console.log(name); //Undefined
            var name = "Milind"
            console.log(name); //Milind
        }());

        var name2 = "Saurabh";

        function abc() {
            console.log(name2); //Saurabh
            var name3 = "Milind"
            console.log(name3); //Milind
        };

        abc();

    });

    $("#HoistFunction1").on("click", function () {
        hoist();
        function hoist() {
            alert("function is defined later");
        }
    });

    $("#HoistFunction2").on("click", function () {
        hoist();    // hoist is undefined
        var hoist = function () {
            alert("function is defined later");
        }
    });
    $("#HoistFunction3").on("click", function () {
        abc();  // abc is not defined
        hoist();    // undefined is not a function
        var hoist = function abc() {
            alert("function is defined later");
        }
    });

})