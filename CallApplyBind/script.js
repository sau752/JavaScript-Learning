$(function () {

    //Call
    var person1 = {
        firstName: "Saurabh",
        lastName: "Verma"
    };

    var person2 = {
        firstName: "Milind",
        lastName: "Verma"
    }

    function callFunction(greetingMessage) {
        alert(`${greetingMessage}, ${this.firstName} ${this.lastName}`);
    }

    $("#anchorCallFunction").on("click", function () {
        callFunction.call(person1, "Hello");
    });

    //Apply
    var greetMessage = ["Good", "Morning"];

    function applyFunction(firstMsg, secondMsg) {
        alert(`${firstMsg} ${secondMsg}, ${this.firstName} ${this.lastName}`);
    }

    $("#anchorApplyFunction").on("click", function () {
        applyFunction.apply(person2, greetMessage);
    });

    //Bind
    function bindFunction(greetingMessage, middleName) {
        alert(`${greetingMessage}, ${this.firstName} ${middleName} ${this.lastName}`);
    }

    $("#anchorBindFunction").on("click", function () {
        var callFun = bindFunction.bind(person1, "Hello");
        callFun("Blank");
    });


})