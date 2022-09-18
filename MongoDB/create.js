let MongoClient = require('mongodb').MongoClient;

let URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(URL, (error, myMongoClient) => {
    try {
        console.log("Database Cluster connected!");
        create(myMongoClient);
    }
    catch (error) {
        console.log("Database cluster couldn't connect");
    }
});

function create(myMongoClient) {
    let myDB = myMongoClient.db('school');

    // creating new collection (table)
    myDB.createCollection("staff", (error, result) => {
        try {
            console.log("Collection created!");
            console.log(result);
        }
        catch (error) {
            console.log("Collection couldn't create!");
        }
    });
}