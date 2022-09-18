let MongoClient = require('mongodb').MongoClient;

let URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(URL, (error, myMongoClient) => {
    try {
        console.log("Database Cluster connected!");
        updateData(myMongoClient);
    }
    catch (error) {
        console.log("Database cluster couldn't connect");
    }
});

function updateData(myMongoClient) {
    let myDb = myMongoClient.db('school');
    let myCollection = myDb.collection('students');

    let query = { ID: "1703074" };
    let newValues = { $set: { City: "Rajshahi" } };

    myCollection.updateOne(query, newValues, (error, result) => {
        try {
            console.log("Update successful!");
            console.log(result);
        }
        catch (error) {
            console.log("couldn't update!");
        }
    });
}

