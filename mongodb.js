// CRUD create, read, update and delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObectID  = mongodb.ObectID

// const { MongoClient, ObjectId } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const database = "task-manager";

// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());

// MongoClient.connect(
//     connectionURL,
//     { useNewUrlParser: true },
//     (error, client) => {
//         if (error) {
//             return console.log("unable to connect to dataset");
//         }
//         const db = client.db(database);
//         db.collection("tasks")
//             .deleteMany({ description: "F*** nitesh" })
//             .then((result) => console.log(result))
//             .catch((error) => console.log(error));
//     }
// );
