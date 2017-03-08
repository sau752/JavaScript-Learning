function getResponse() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.resultText);
        }
    }
    
    xhr.open("GET", "data.json", true);
    xhr.send();
}