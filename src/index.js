const express = require("express");
const api = express();
const APIv1 = require("./api/v1");

const port = 3000;

api.use("/api/v1", APIv1);

api.listen(port);
console.log("Express started on port " + port);
