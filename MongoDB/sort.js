var MongoClient = require('mongodb').MongoClient;


let URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';


MongoClient.connect(URL, (error, myMongoClient) => {

    try {
        console.log("DB connection Success!");
        findAllSort(myMongoClient);
    }
    catch (error) {
        console.log("DB connection failed");
    }
});

function findAllSort(myMongoClient) {
    let myDB = myMongoClient.db('school');
    let myCollection = myDB.collection('students');

    // let sortOrder = { ID: 1 };
    // let sortOrder = { City: 1 };
    let sortOrder = { Section: -1 };

    myCollection.find().sort(sortOrder).toArray((error, resultObj) => {
        try {
            console.log(resultObj);
        }
        catch (error) {
            console.log("find according to limit failed!");
        }
    });

}
