var express = require("express");
var engine = require("ejs-locals");
var app = express();

//settings
app.use(express.static(__dirname + "/public"));
app.engine('ejs', engine);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));

//methods
app.get("/", function(req, res) {
    res.render("home");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

