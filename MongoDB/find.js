var MongoClient = require('mongodb').MongoClient;


let URL = 'mongodb+srv://saadrupai:AJohIXSnI4iBxNpU@cluster0.bfiqyat.mongodb.net/?retryWrites=true&w=majority';


MongoClient.connect(URL, (error, myMongoClient) => {

    try {
        console.log("DB connection Success!");
        findAll(myMongoClient);
    }
    catch (error) {
        console.log("DB connection failed");
    }
});



// find One data
// function findOne(myMongoClient) {
//     let myDB = myMongoClient.db('school');
//     let myCollection = myDB.collection('students');

//     //uncondition
//     // let findObj = {};

//     //condition
//     let findObj = { ID: "1703071" };

//     myCollection.findOne(findObj, (error, resultObj) => {

//         try {
//             console.log(resultObj);
//         }
//         catch (error) {
//             console.log("deletion failed");
//         }
//     });
// }


// find all data
function findAll(myMongoClient) {
    let myDB = myMongoClient.db('school');
    let myCollection = myDB.collection('students');

    let myObj = {};

    myCollection.find(myObj).toArray((error, resultObj) => {

        try {
            console.log(resultObj);
        }
        catch (error) {
            console.log("deletion failed");
        }
    });
}