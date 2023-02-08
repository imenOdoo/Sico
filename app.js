const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.get("/hello", (req, res) => {
  res.send("hello amouna :)");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
