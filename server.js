const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const index = require("./routes/index");
const tasks = require("./routes/tasks");

// Connect to Mongo
const mongo = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoapp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback ()
{
    console.log("h");
});

const cors = require("cors");

var port = 5000;

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);

//View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, "client")));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/api", tasks);

app.listen(port, function() {
    console.log("Server started on port " + port);
});
