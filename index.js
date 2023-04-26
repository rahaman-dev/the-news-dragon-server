const express = require("express");
const app = express();
const port = 5000;
var cors = require("cors");
app.use(cors());
const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`express app listen ${port}`);
});
