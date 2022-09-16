var MongoClient = require('mongodb').MongoClient;


let URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';


MongoClient.connect(URL, (error, myMongoClient) => {

    try {
        console.log("DB connection Success!");
        findAllQuery(myMongoClient);
    }
    catch (error) {
        console.log("DB connection failed");
    }
});

function findAllQuery(myMongoClient) {
    let myDB = myMongoClient.db('school');
    let myCollection = myDB.collection('students');

    // let query = { City: "Rajshahi" }
    let query = { City: "Rajshahi", ID: "1703075" }

    myCollection.find(query).toArray((error, resultObj) => {
        try {
            console.log("query successful!");
            console.log(resultObj);
        }
        catch (error) {
            console.log("query unsuccessful!")
        }
    });
}

