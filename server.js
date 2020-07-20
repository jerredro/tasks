var express = require("express");
var app = express();
//var path = require("path");
var bodyParser = require('body-parser');
//var session = require('express-session');
//var mongoose = require('mongoose')

app.use(bodyParser.json());
// use module session code
//app.use(session({
//    secret: 'this_be_my_secret',
//    resave: false,
//    saveUninitialized: true,
//    cookie: { maxAge: 3600000 }
//}))
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/mongoose');
var router = require('./server/config/routes');
router(app);

var PORT = 8000;
var line = "\n************************\n"
app.listen(8000, function () {
    console.log(line + "listening on port" + PORT + line);
})