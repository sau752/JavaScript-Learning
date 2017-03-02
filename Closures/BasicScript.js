/*Without closure - Below is not a closure*/

$(function () {

    function createCat() {

        var catName = "I am Kitty Without Closure";
        function catFactory() {
            alert(catName);
        }

        catFactory(); //in closure REFERENCE of function is returned but here innner function is called, hence this is not a closure
    }

    $("#anchorNonClosure").click(function () {
        createCat();
    });
});

