const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');


// ==================================================================
// Setup the Express app

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


// ==================================================================
// Setup the MongoDB database

mongoose.connect("mongodb://localhost:27017/portfolioDB", { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


// ==================================================================
// Endpoint routes

app.route("/")
    .get((req, res) => {
        res.render("home");
    });


// ==================================================================
// Start the Express server

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
});