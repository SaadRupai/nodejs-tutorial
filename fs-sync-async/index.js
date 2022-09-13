var fs = require('fs');           //importing fs module
var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {

        //async
        // fs.readFile('home.html', function (error, data) {
        //     res.writeHead(200, { 'Content-Type': 'text/html' });
        //     res.write(data);
        //     res.end();
        // })

        //sync
        // let myData = fs.readFileSync('home.html');       //returns data
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write(myData);
        // res.end();

        //async
        // fs.writeFile('data.txt', "I love you, Allah", function (error) {
        //     if (error) {
        //         res.writeHead(200, { 'Content-Type': 'text/html' });
        //         res.write("File write unsuccessful!");
        //         res.end();
        //     }
        //     else {
        //         res.writeHead(200, { 'Content-Type': 'text/html' });
        //         res.write("File write successful!");
        //         res.end();
        //     }
        // })

        //sync
        // let error = fs.writeFileSync('data.txt', 'I love Quran');  //returns same parameter as sync

        // if (error) {
        //     res.writeHead(200, { 'Content-Type': 'text/html' });
        //     res.write("File write unsuccessful!");
        //     res.end();
        // }
        // else {
        //     res.writeHead(200, { 'Content-Type': 'text/html' });
        //     res.write("File write successful!");
        //     res.end();
        // }

        //async
        // fs.rename('data.txt', 'newdata.txt', function (error) {
        //     if (error) {
        //         res.writeHead(200, { 'Content-Type': 'text/html' });
        //         res.write("File rename unsuccessful!");
        //         res.end();
        //     }
        //     else {
        //         res.writeHead(200, { 'Content-Type': 'text/html' });
        //         res.write("File rename successful!");
        //         res.end();
        //     }
        // })

        //sync
        // let error = fs.renameSync('newnewdata.txt', 'demodata.txt');
        // if (error) {
        //     res.writeHead(200, { 'Content-Type': 'text/html' });
        //     res.write("File rename unsuccessful!");
        //     res.end();
        // }
        // else {
        //     res.writeHead(200, { 'Content-Type': 'text/html' });
        //     res.write("File rename successful!");
        //     res.end();
        // }

        //sync
        // let error = fs.unlinkSync('more.txt')
        // if (error) {
        //     res.writeHead(200, { 'Content-Type': 'text/html' });
        //     res.write("File delete unsuccessful!");
        //     res.end();
        // }
        // else {
        //     res.writeHead(200, { 'Content-Type': 'text/html' });
        //     res.write("File delete successful!");
        //     res.end();
        // }

        //sync
        // let error = fs.existsSync('demodata.txt');
        // if (error) {
        //     res.end("True");
        // }
        // else {
        //     res.end("False");
        // }

        //async
        fs.exists('demodata.txt', function (error) {
            if (error) {
                res.end("True");
            }
            else {
                res.end("False");
            }
        });

    }
});

server.listen(5050);

console.log('Server Connnected!');