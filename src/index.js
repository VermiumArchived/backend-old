var express = require("express");
var app = express();

app.use("/api/v1/authentication", require("./api/v1/authentication"));

app.get("/", function (req, res) {
  res.send("Hello from root route.");
});

app.listen(3000);
console.log("Express started on port 3000");
