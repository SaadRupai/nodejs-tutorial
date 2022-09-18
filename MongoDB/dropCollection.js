let MongoClient = require('mongodb').MongoClient;

let URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(URL, (error, myMongoClient) => {
    try {
        console.log("Database Cluster connected!");
        dropmycollection(myMongoClient);
    }
    catch (error) {
        console.log("Database cluster couldn't connect");
    }
});

function dropmycollection(myMongoClient) {
    let myDB = myMongoClient.db('school');

    // dropping existing collection (table)
    myDB.dropCollection("staff", (error, result) => {
        try {
            console.log("Collection deleted!");
            console.log(result);
        }
        catch (error) {
            console.log("Collection couldn't delete!");
        }
    });
}