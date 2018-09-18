var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./routes");

app.use(express.static(__dirname + "/public"));

app.use(router);

app.listen(PORT, function() {
    console.log("listening on port:" + PORT);
});