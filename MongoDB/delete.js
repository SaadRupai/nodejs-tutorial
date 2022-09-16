var MongoClient = require('mongodb').MongoClient;


let URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';

// to delete single data
// MongoClient.connect(URL, (error, myMongoClient) => {
//     let myDB = myMongoClient.db('school');
//     let myCollection = myDB.collection('students');

//     let res = myCollection.deleteOne({ ID: "1703071" });
//     if (res) {
//         console.log("Deletion successful");
//     }
//     else {
//         console.log("Deletion failed");
//     }

// });

//to delete all data
MongoClient.connect(URL, (error, myMongoClient) => {

    try {
        console.log("DB connection Success!");
        deleteAll(myMongoClient);
    }
    catch (error) {
        console.log("DB connection failed");
    }
});



function deleteAll(myMongoClient) {
    let myDB = myMongoClient.db('school');
    let myCollection = myDB.collection('students');

    myCollection.deleteMany((error, resultObj) => {

        try {
            console.log(resultObj);
        }
        catch (error) {
            console.log("deletion failed");
        }
    });
}
