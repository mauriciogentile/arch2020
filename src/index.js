var express = require("express");
var engine = require('ejs-locals');
var app = express();

app.use("/font-awesome", express.static(__dirname + "/font-awesome"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/images", express.static(__dirname + "/images"));
app.set("views", __dirname + "/views");

app.engine('ejs', engine);
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

var server = app.listen(1111, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

