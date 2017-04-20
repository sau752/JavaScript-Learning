function myFunction() {
    var str = document.getElementById("p1").innerHTML;
    var pos = str.indexOf("locate");
    document.getElementById("demo").innerHTML = pos;
}
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
    console.log("Change!");
}