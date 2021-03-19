var express = require("express");

var app = express();

app.use("/api/authentication", require("./api/authentication"));

app.get("/", function (req, res) {
  res.send("Hello from root route.");
});

app.listen(3000);
console.log("Express started on port 3000");
