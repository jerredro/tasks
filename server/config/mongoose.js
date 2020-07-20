var fs = require("fs");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restful_task_api");

var models_path = __dirname + "/../models";

fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf(".js") >= 0)
        require(models_path + "/" + file);
});