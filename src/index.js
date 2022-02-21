const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Without middleware: new request -> run route handler
// With middleware: new request -> do something -> run route handler

app.listen(port, () => {
    console.log("Server is up on port " + port);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const multer = require("multer");
// const upload = multer({
//     dest: "images",
//     limits: {
//         fileSize: 1000000,
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error("Please upload a pdf"));
//         }
//         cb(undefined, true);
//         // cb(new Error("File must be a PDF"))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     },
// });

// app.post(
//     "/upload",
//     upload.single("upload"),
//     (req, res) => {
//         res.send();
//     },
//     (error, req, res, next) => {
//         res.status(400).send({ error: error.message });
//     }
// );
// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//     // const task = await Task.findById("6207501dbb713241eda10ae6");
//     // await task.populate("owner").execPopulate();
//     // console.log(task.owner);
//     const user = await User.findById("62074fc6531ee340d6fe99d7");
//     await user.populate("tasks").execPopulate();
//     console.log(user.tasks);
// };

// main();

// const pet = {
//     name: "HAL",
// };

// pet.toJSON = function () {
//     return {};
// };

// console.log(JSON.stringify(pet));

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//     const token = jwt.sign({ _id: "abcd1234" }, "thisismynewcorse", {
//         expiresIn: "7 days",
//     });
//     console.log(token);

//     const data = jwt.verify(token, "thisismynewcorse");
//     console.log(data);
// };

// myFunction();

// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//     const password = "Red12345";
//     const hashPassoword = await bcrypt.hash(password, 8);

//     console.log(password);
//     console.log(hashPassoword);

//     const isMatch = await bcrypt.compare("Red12345", hashPassoword);
//     console.log(isMatch);
// };

// myFunction();

// andrew -> afgsgfwsertw -> andrew          // Encryption Algorithms -> We can get back the data
// myPass -> ojoohswofhgw                    // Hashing-> Non reversible
