var http = require('http');
const path = require('path');
var URL = require('url');           // to import url module

var server = http.createServer(function (req, res) {
    myUrl = "https://saad.com/blog.html?year=2022&month=july";
    var myUrlObj = URL.parse(myUrl, true);    //to split the url into parts
    // parse sends back an object
    var hostname = myUrlObj.host;
    var pathname = myUrlObj.pathname;
    var searchname = myUrlObj.search;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(searchname);
    res.end();
})

server.listen(5050);

console.log("Server connected!");