/*With closure - Below is a closure*/

$(function () {

    function createCat() {

        var catName = "I am another Kitty with Closure";
        function catFactory() {
            alert(catName);
        }

        return catFactory; //in closure REFERENCE of function is returned - hence this is a closure
    }

    $("#anchorClosure").click(function () {
        var catObj = createCat(); //catFactory function is returned
        catObj();
    });
});


//catObj has become the CLOSURE
//CLOSURE is the snapshot of outer environment at the time closure is created
//CLOSURE is created at the moment when you assign a function REFERENCE and copy of its environment into memory by putting inside variable
//OR 
//CLOSURE is special type of OBJECT that combines FUNCTION and ENVIRONMENT in which that function was created
//ENVIRONMENT consist of LOCAL variable and INPUT parameter passed


//CLOSURE is used in JavaScript module pattern

//CLOSURE actually do not store value themselves but they instead store REFERENCES to outer function variables
