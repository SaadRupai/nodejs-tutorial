var MongoClient = require('mongodb').MongoClient;


let URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';


MongoClient.connect(URL, (error, myMongoClient) => {

    try {
        console.log("DB connection Success!");
        findAllProjection(myMongoClient);
    }
    catch (error) {
        console.log("DB connection failed");
    }
});


// find all data
function findAllProjection(myMongoClient) {
    let myDB = myMongoClient.db('school');
    let myCollection = myDB.collection('students');

    let myObj = {};
    let myProjection = { projection: { ID: 1, City: 1 } }

    myCollection.find(myObj, myProjection).toArray((error, resultObj) => {

        try {
            console.log(resultObj);
        }
        catch (error) {
            console.log("deletion failed");
        }
    });
}