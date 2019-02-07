const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hi there");
});
app.get("/bye", function(req, res) {
  res.send("Goodbye");
});
app.get("/cat", function(req, res) {
  console.log("new request to /cat");
  res.send("MEOW");
});
app.listen(3500, function() {
  console.log("Server has started at port 3500");
});
