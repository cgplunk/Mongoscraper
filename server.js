var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var router = express.Router();

var PORT = process.env.PORT || 3000;

var app = express();

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/MongoHeadlines";

mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection is successful");
    }
});

app.listen(PORT, function() {
    console.log("listening on port:" + PORT);
});