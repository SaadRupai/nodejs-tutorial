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
    let myData = { name: "Saad", ID: "1703069", Section: "B", City: "Rajshahi" };

    let myData2 = { name: "Ratul", ID: "1703093", Section: "B", City: "Rajshahi" };

    let res = myCollection.insertOne(myData);

    myCollection.insertOne(myData2);

    if (res) {
        console.log("Data inserted");
    }
    else {
        console.log("insertion failed");
    }
}