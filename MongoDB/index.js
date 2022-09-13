var MongoClient = require('mongodb').MongoClient                //importing mongodb module

// url from mongodb website
var URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';

// var config = `--global`;

MongoClient.connect(URL, function (error) {                     //connecting cluster
    try {
        console.log("Database cluster connected successfully!");
    }
    catch (error) {
        console.log("Database cluster connection failed!");
    }
})