var MongoClient = require('mongodb').MongoClient;


var URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';


MongoClient.connect(URL, function (error, myMongoClient) {

    if (error) {
        console.log("Database Connection Failed!");
    }
    else {
        console.log("Database Connected Successfully!");
        insertData(myMongoClient);
    }
});


function insertData(myMongoClient) {
    let myMongoDB = myMongoClient.db('school'); //connecting db

    let myCollection = myMongoDB.collection('students');   //connecting collection

    //data must be inserted in JSON format
    let myData = { name: "NFahim", ID: "1703042", Section: "A", City: "Bogura" };

    let myData2 = { name: "Dihan", ID: "1703093", Section: "C", City: "Chittagong" };

    let res = myCollection.insertOne(myData);

    myCollection.insertOne(myData2);

    if (res) {
        console.log("Data inserted");
    }
    else {
        console.log("insertion failed");
    }
}