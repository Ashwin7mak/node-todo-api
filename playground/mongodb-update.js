const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect to the MongoDB server");
    }
    console.log("Successfully connected to the MongoDB server");


    const db = client.db('TodoApp');


    // Updates the Todos collection
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bff91d037afa727d0b685a9'),
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // Update the Users collection
    db.collection('Users').findOneAndUpdate({
        name: 'Matty'
    }, {
        $inc: {
            age: +2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

});
