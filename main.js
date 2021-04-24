const express = require("express");
const app = express();
var d = new Date();
var n = d.getHours();
var x = d.getDay();
if (n < 17 && n > 9 && x != 0 && x != 6) {
    app.get("/", (req, res) => {
        console.log(__dirname);
        res.sendFile(__dirname + "/Public/home.html");
    });

    app.get("/css/style.css", (req, res) => {
        res.sendFile(__dirname + "/Public/css/style.css");
    });

    app.get("/services", (req, res) => {
        res.sendFile(__dirname + "/Public/Services.html");
    });

    app.get("/contact", (req, res) => {
        res.sendFile(__dirname + "/Public/contact.html");
    });
} else {
    // app.get("/contact" | "/services", (req, res) => {
    //     res.send("Bye Bye");
    // });
    app.get("/", (req, res) => {
        res.send("Bye Bye");
    });
}

const port = 5000;
app.listen(port, (error) => {
    error
        ? console.log("can not connect to the server")
        : console.log("the server is connected on port 5000");
});
