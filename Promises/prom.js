$(function () {
    var runPromise = function (url) {
        var promise = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();

            var jokeUrl = url | 'http://api.icndb.com/jokes/random';

            request.open('GET', jokeUrl);
            request.onload = function () {
                if (request.status == 200) {
                    resolve(request.response); // we got data here, so resolve the Promise
                } else {
                    reject(Error(request.statusText)); // status is not 200 OK, so reject
                }
            };

            request.onerror = function () {
                reject(Error('Error fetching data.')); // error occurred, reject the  Promise
            };

            request.send(); //send the request
        });

        console.log('Asynchronous request made.');

        promise.then(function (data) {
            console.log('Got data! Promise fulfilled.');
            alert(JSON.parse(data).value.joke);
        }, function (error) {
            console.log('Promise rejected.');
            alert(error.message);
        });
    }

    var myPromise = function (url) {
        var promise = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();

            request.open('GET', url);
            request.onload = function () {
                if (request.status == 200) {
                    resolve(request.response); // we got data here, so resolve the Promise
                } else {
                    reject(Error(request.statusText)); // status is not 200 OK, so reject
                }
            };

            request.onerror = function () {
                reject(Error('Error fetching data.')); // error occurred, reject the  Promise
            };

            request.send(); //send the request
        });

        return promise;
    };

    function successFun(data) {
        console.log('Got data! Promise fulfilled.');
        alert(JSON.parse(data).value.joke);
    }
    
    function errorFun(error) {
        console.log('Promise rejected.');
        alert(error.message);
    }


    var sv = {
        get: function (url) {
            return myPromise(url);
        }
    }

    $("#anchorPromFunction").on("click", function () {
        runPromise();
    });

    $("#implementPromFunction").on("click", function () {
        sv.get("http://api.icndb.com/jokes/random").then(successFun, errorFun);
    });
});