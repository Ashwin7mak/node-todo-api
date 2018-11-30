const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Successfully connected to MongoDB server");

    const db = client.db('TodoApp');


    // Used to delete many collections from Todos
    // db.collection('Users').deleteMany({name: 'Krish'}).then((result) => {
    //     console.log(result);
    // });

    // DeleteOne
    db.collection('Users').deleteOne({name: 'Krish'}).then((result) => {
        console.log(result);
    });

    // FindOneAndDelete
    // db.collection('Todos').findOneAndDelete({ text: 'Hurray' }).then((result) => {
    //     console.log(result);
    // });
    // client.close();
});