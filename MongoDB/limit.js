var MongoClient = require('mongodb').MongoClient;


let URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';


MongoClient.connect(URL, (error, myMongoClient) => {

    try {
        console.log("DB connection Success!");
        findAllLimit(myMongoClient);
    }
    catch (error) {
        console.log("DB connection failed");
    }
});

function findAllLimit(myMongoClient) {
    let myDB = myMongoClient.db('school');
    let myCollection = myDB.collection('students');

    myCollection.find().limit(7).toArray((error, resultObj) => {
        try {
            console.log(resultObj);
        }
        catch (error) {
            console.log("find according to limit failed!");
        }
    });
}
