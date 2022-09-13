var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {           // have to sent request using url
        res.writeHead(200, { 'contect-type': 'text/html' });   // head part{key-value}
        res.write('<h1>This is Home page!</h1>');       // body part
        res.end();                  //need to close response
    } else if (req.url == '/about') {
        res.writeHead(200, { 'contect-type': 'text/html' });
        res.write('<h1>This is About page!</h1>');
        res.end();
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'contect-type': 'text/html' });
        res.write('<h1>This is Contact page!</h1>');
        res.end();
    }
});

server.listen(5050);
console.log("server connected");