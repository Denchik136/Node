var request = require('request');

var myJSONObject = { "a":"b" };
request({
    url: "http://127.0.0.1:7000/api/user",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(response.body);
});